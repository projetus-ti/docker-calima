var BrowserHistory = (function () {
    // type of browser
    var browser = {
        ie: false,
        firefox: false,
        safari: false,
        opera: false,
        version: -1
    };

    // Default app state URL to use when no fragment ID present
    var defaultHash = '';

    // Last-known app state URL
    var currentHref = document.location.href;

    // Initial URL (used only by IE)
    var initialHref = document.location.href;

    // Initial URL (used only by IE)
    var initialHash = document.location.hash;

    // History frame source URL prefix (used only by IE)
    var historyFrameSourcePrefix = 'history/historyFrame.html?';

    // History maintenance (used only by Safari)
    var currentHistoryLength = -1;

    var historyHash = [];

    var initialState = createState(initialHref, initialHref + '#' + initialHash, initialHash);

    var backStack = [];
    var forwardStack = [];

    var currentObjectId = null;

    //UserAgent detection
    var useragent = navigator.userAgent.toLowerCase();

    if (useragent.indexOf("opera") !== -1) {
        browser.opera = true;
    } else if (useragent.indexOf("msie") !== -1) {
        browser.ie = true;
        browser.version = parseFloat(useragent.substring(useragent.indexOf('msie') + 4));
    } else if (useragent.indexOf("safari") !== -1) {
        browser.safari = true;
        browser.version = parseFloat(useragent.substring(useragent.indexOf('safari') + 7));
    } else if (useragent.indexOf("gecko") !== -1) {
        browser.firefox = true;
    }

    if (browser.ie && browser.version === 7) {
        window["_ie_firstload"] = false;
    }

    // Accessor functions for obtaining specific elements of the page.
    function getHistoryFrame() {
        return document.getElementById('ie-history-frame');
    }

    function getAnchorElement() {
        return document.getElementById('firefox-anchor-div');
    }

    function getFormElement() {
        return document.getElementById('safari-form-div');
    }

    function getRememberElement() {
        return document.getElementById("safari_remember_field");
    }

    function getPlayerId() {
        var o = document.getElementsByTagName("object");
        var e = document.getElementsByTagName("embed");
        if (e.length > 0 && typeof e[0].SetVariable != "undefined") {
            return e[0];
        }
        else if (o.length > 0 && typeof o[0].SetVariable != "undefined") {
            return o[0];
        }
        else if (o.length > 1 && typeof o[1].SetVariable != "undefined") {
            return o[1];
        }
        return undefined;
    }

    // Get the Flash player object for performing ExternalInterface callbacks.
    // Updated for changes to SWFObject2.
    function getPlayer(id) {
        if (id && document.getElementById(id)) {
            var r = document.getElementById(id);
            if (typeof r.SetVariable != "undefined") {
                return r;
            }
        }
        return getPlayerId();
    }

    function getPlayers() {
        var players = [];
        if (players.length === 0) {
            players = document.getElementsByTagName('object');
        }

        if (players.length === 0 || players[0].object == null) {
            players = document.getElementsByTagName('embed');
        }
        return players;
    }

    function getIframeHash() {
        var doc = getHistoryFrame().contentWindow.document;
        var hash = String(doc.location.search);
        if (hash.length == 1 && hash.charAt(0) == "?") {
            hash = "";
        }
        else if (hash.length >= 2 && hash.charAt(0) == "?") {
            hash = hash.substring(1);
        }
        return hash;
    }

    /* Get the current location hash excluding the '#' symbol. */
    function getHash() {
        // It would be nice if we could use document.location.hash here,
        // but it's faulty sometimes.
        var idx = document.location.href.indexOf('#');
        return (idx >= 0) ? document.location.href.substr(idx + 1) : '';
    }

    /* Get the current location hash excluding the '#' symbol. */
    function setHash(hash) {
        // It would be nice if we could use document.location.hash here,
        // but it's faulty sometimes.
        if (hash === '') {
            hash = '#'
        }
        document.location.hash = hash;
    }

    function createState(baseUrl, newUrl, flexAppUrl) {
        return {'baseUrl': baseUrl, 'newUrl': newUrl, 'flexAppUrl': flexAppUrl, 'title': null};
    }

    function addHistoryEntryIE(baseUrl, newUrl, flexAppUrl) {
        //Check to see if we are being asked to do a navigate for the first
        //history entry, and if so ignore, because it's coming from the creation
        //of the history iframe
        if (flexAppUrl === defaultHash && document.location.href === initialHref && window['_ie_firstload']) {
            currentHref = initialHref;
            return;
        }
        if ((!flexAppUrl || flexAppUrl === defaultHash) && window['_ie_firstload']) {
            flexAppUrl = defaultHash;
        } else {
            // for IE, tell the history frame to go somewhere without a '#'
            // in order to get this entry into the browser history.
            getHistoryFrame().src = historyFrameSourcePrefix + flexAppUrl;
        }
        setHash(flexAppUrl);
    }

    function addHistoryEntrySafari(baseUrl, newUrl, flexAppUrl) {
        // for Safari, submit a form whose action points to the desired URL
        if (browser.version <= 419.3) {
            var file = window.location.pathname.toString();
            file = file.substring(file.lastIndexOf("/") + 1);
            getFormElement().innerHTML =
                '<form name="historyForm" action="' + file + '#' + flexAppUrl
                + '" method="GET"></form>';
            //get the current elements and add them to the form
            var qs = window.location.search.substring(1);
            var qs_arr = qs.split("&");
            for (var i = 0; i < qs_arr.length; i++) {
                var tmp = qs_arr[i].split("=");
                var elem = document.createElement("input");
                elem.type = "hidden";
                elem.name = tmp[0];
                elem.value = tmp[1];
                document.forms.historyForm.appendChild(elem);
            }
            document.forms.historyForm.submit();
        } else {
            top.location.hash = flexAppUrl;
        }
        // We also have to maintain the history by hand for Safari
        historyHash[history.length] = flexAppUrl;
        _storeStates();
    }

    /* Add a history entry to the browser.
     *   baseUrl: the portion of the location prior to the '#'
     *   newUrl: the entire new URL, including '#' and following fragment
     *   flexAppUrl: the portion of the location following the '#' only
     */
    function addHistoryEntry(baseUrl, newUrl, flexAppUrl) {
        //delete all the history entries
        forwardStack = [];
        if (browser.ie) {
            addHistoryEntryIE(baseUrl, newUrl, flexAppUrl);
        } else {
            //ADR
            if (backStack.length === 0 && initialState.flexAppUrl === flexAppUrl) {
                initialState = createState(baseUrl, newUrl, flexAppUrl);
            } else if (backStack.length > 0 && backStack[backStack.length - 1].flexAppUrl === flexAppUrl) {
                backStack[backStack.length - 1] = createState(baseUrl, newUrl, flexAppUrl);
            }
            if (browser.safari) {
                addHistoryEntrySafari(baseUrl, newUrl, flexAppUrl)
            } else {
                // Otherwise, write an anchor into the page and tell the browser to go there
                addAnchor(flexAppUrl);
                setHash(flexAppUrl);
            }
        }
        backStack.push(createState(baseUrl, newUrl, flexAppUrl));
    }

    function _storeStates() {
        if (browser.safari) {
            getRememberElement().value = historyHash.join(",");
        }
    }

    function handleBackButton() {
        //The "current" page is always at the top of the history stack.
        var current = backStack.pop();
        if (!current) {
            return;
        }
        forwardStack.push(current);
    }

    function handleForwardButton() {
        //summary: private method. Do not call this directly.

        var last = forwardStack.pop();
        if (!last) {
            return;
        }
        backStack.push(last);
    }

    function handleArbitraryUrl() {
        //delete all the history entries
        forwardStack = [];
    }

    function checkForUrlChangeIE() {
        if (currentHref !== document.location.href && currentHref + '#' !== document.location.href) {
            //This occurs when the user has navigated to a specific URL
            //within the app, and didn't use browser back/forward
            //IE seems to have a bug where it stops updating the URL it
            //shows the end-user at this point, but programatically it
            //appears to be correct.  Do a full app reload to get around
            //this issue.
            if (browser.version < 7) {
                currentHref = document.location.href;
                document.location.reload();
            } else {
                if (getHash() !== getIframeHash()) {
                    getHistoryFrame().src = historyFrameSourcePrefix + getHash();
                }
            }
        }
    }

    function checkBack(bsl, urlActions) {
        if ((window.location.hash === initialHash || window.location.href === initialHref) && (bsl === 1)) {
            urlActions.back = true;
            // we can't clear it because we still need to check for forwards. Ugg.
            // clearInterval(this.locationTimer);
            handleBackButton();
        }

        // ok, that didn't work, try someplace back in the history stack
        if ((bsl >= 2) && (backStack[bsl - 2])) {
            if (backStack[bsl - 2].flexAppUrl === getHash()) {
                urlActions.back = true;
                handleBackButton();
            }
        }
    }

    function checkForward(urlActions) {
// first check to see if we could have gone forward. We always halt on
        // a no-hash item.
        if (forwardStack.length > 0) {
            if (forwardStack[forwardStack.length - 1].flexAppUrl === getHash()) {
                urlActions.forward = true;
                handleForwardButton();
            }
        }
    }

    function dispatchUrl() {
        var flexAppUrl = getHash();
        //ADR: to fix multiple
        if (typeof BrowserHistory_multiple != "undefined" && BrowserHistory_multiple) {
            var pl = getPlayers();
            for (var i = 0; i < pl.length; i++) {
                pl[i].browserURLChange(flexAppUrl);
            }
        } else {
            getPlayer().browserURLChange(flexAppUrl);
        }
    }

    function checkForUtlChangeFirefox() {
        if (currentHref !== document.location.href) {
            var bsl = backStack.length;

            var urlActions = {
                back: false,
                forward: false,
                set: false
            };

            checkBack(bsl, urlActions);
            checkForward(urlActions);

            if (!urlActions.back && !urlActions.forward) {
                handleArbitraryUrl();
            }

            // Firefox changed; do a callback into BrowserManager to tell it.
            currentHref = document.location.href;
            dispatchUrl();
        }
    }

    function checkForUrlChangeSafari() {
        // For Safari, we have to check to see if history.length changed.
        if (currentHistoryLength >= 0 && history.length !== currentHistoryLength) {
            var flexAppUrl = getHash();
            if (browser.version < 528.16) {
                currentHistoryLength = history.length;
                flexAppUrl = historyHash[currentHistoryLength];
            }

            //ADR: to fix multiple
            if (typeof BrowserHistory_multiple !== "undefined" && BrowserHistory_multiple) {
                var pl = getPlayers();
                for (var i = 0; i < pl.length; i++) {
                    pl[i].browserURLChange(flexAppUrl);
                }
            } else {
                getPlayer().browserURLChange(flexAppUrl);
            }
            _storeStates();
        }
    }

    /* Called periodically to poll to see if we need to detect navigation that has occurred */
    function checkForUrlChange() {

        if (browser.ie) {
            checkForUrlChangeIE();
        }
        if (browser.safari) {
            checkForUrlChangeSafari();
        }
        if (browser.firefox) {
            checkForUtlChangeFirefox();
        }
    }

    /* Write an anchor into the page to legitimize it as a URL for Firefox et al. */
    function addAnchor(flexAppUrl) {
        if (document.getElementsByName(flexAppUrl).length === 0) {
            getAnchorElement().innerHTML += "<a name='" + flexAppUrl + "'>" + flexAppUrl + "</a>";
        }
    }

    function initializeIE() {
        var scripts = document.getElementsByTagName('script');
        var iframe_location;
        for (var i = 0, s; s = scripts[i]; i++) {
            if (s.src.indexOf("history.js") > -1) {
                var srcScript = String(s.src);
                iframe_location = srcScript.replace("history.js", "historyFrame.html");
            }
        }
        historyFrameSourcePrefix = iframe_location + "?";

        var iframe = document.createElement("iframe");
        iframe.id = 'ie-history-frame';
        iframe.name = 'ie-history-frame';

        try {
            document.body.appendChild(iframe);
        } catch (e) {
            setTimeout(function () {
                document.body.appendChild(iframe);
            }, 0);
        }
    }

    function initializeSafari() {
        var rememberDiv = document.createElement("div");
        rememberDiv.id = 'safari-remember-div';
        document.body.appendChild(rememberDiv);
        rememberDiv.innerHTML =
            '<input type="text" id="safari_remember_field" style="width: 500px;">';

        var formDiv = document.createElement("div");
        formDiv.id = 'safari-form-div';
        document.body.appendChild(formDiv);

        var reloader_content = document.createElement('div');
        reloader_content.id = 'safarireloader';
        reloader_content.innerHTML =
            '<iframe id="safarireloader-iframe" src="about:blank" frameborder="no" scrolling="no"></iframe>';
        document.body.appendChild(reloader_content);
        reloader_content.style.position = 'absolute';
        reloader_content.style.left = reloader_content.style.top = '-9999px';
        if (document.getElementById("safari_remember_field").value !== "") {
            historyHash = document.getElementById("safari_remember_field").value.split(",");
        }
    }

    function initializeFirefox() {
        var anchorDiv = document.createElement("div");
        anchorDiv.id = 'firefox-anchor-div';
        document.body.appendChild(anchorDiv);
    }

    var _initialize = function () {
        if (browser.ie) {
            initializeIE();
        }

        if (browser.safari) {
            initializeSafari();
        }

        if (browser.firefox) {
            initializeFirefox();
        }
    };

    return {
        historyHash: historyHash,
        backStack: function () {
            return backStack;
        },
        forwardStack: function () {
            return forwardStack
        },
        getPlayer: getPlayer,
        initialize: function (src) {
            _initialize();
        },
        setURL: function (url) {
            document.location.href = url;
        },
        getURL: function () {
            return document.location.href;
        },
        getTitle: function () {
            return document.title;
        },
        setTitle: function (title) {
            try {
                backStack[backStack.length - 1].title = title;
            } catch (e) {
            }
            if (browser.safari) {
                if (title === "") {
                    try {
                        var tmp = window.location.href.toString();
                        title = tmp.substring((tmp.lastIndexOf("/") + 1), tmp.lastIndexOf("#"));
                    } catch (e) {
                        title = "";
                    }
                }
            }
            document.title = title;
        },
        setDefaultURL: function (def) {
            defaultHash = def;
            def = getHash();
            //trailing ? is important else an extra frame gets added to the history
            //when navigating back to the first page.  Alternatively could check
            //in history frame navigation to compare # and ?.
            if (browser.ie) {
                window['_ie_firstload'] = true;
                var sourceToSet = historyFrameSourcePrefix + def;
                var func = function () {
                    getHistoryFrame().src = sourceToSet;
                    window.location.replace("#" + def);
                    setInterval(checkForUrlChange, 50);
                };
                try {
                    func();
                } catch (e) {
                    window.setTimeout(function () {
                        func();
                    }, 0);
                }
            }

            if (browser.safari) {
                currentHistoryLength = history.length;
                if (historyHash.length === 0) {
                    historyHash[currentHistoryLength] = def;
                    window.location.replace("#" + def);
                }
                setInterval(checkForUrlChange, 50);
            }

            if (browser.firefox || browser.opera) {
                var reg = new RegExp("#" + def + "$");
                if (!window.location.toString().match(reg)) {
                    window.location.replace("#" + def);
                }
                setInterval(checkForUrlChange, 50);
            }

        },

        /* Set the current browser URL; called from inside BrowserManager to propagate
         * the application state out to the container.
         */
        setBrowserURL: function (flexAppUrl, objectId) {
            if (browser.ie && typeof objectId != "undefined") {
                currentObjectId = objectId;
            }

            var pos = document.location.href.indexOf('#');
            var baseUrl = pos !== -1 ? document.location.href.substr(0, pos)
                                     : document.location.href;
            var newUrl = baseUrl + '#' + flexAppUrl;

            if (document.location.href !== newUrl && document.location.href + '#' !== newUrl) {
                currentHref = newUrl;
                addHistoryEntry(baseUrl, newUrl, flexAppUrl);
                currentHistoryLength = history.length;
            }
        },

        browserURLChange: function (flexAppUrl) {
            var objectId = null;
            if (browser.ie && currentObjectId != null) {
                objectId = currentObjectId;
            }

            if (typeof BrowserHistory_multiple !== "undefined" && BrowserHistory_multiple) {
                var pl = getPlayers();
                for (var i = 0; i < pl.length; i++) {
                    try {
                        pl[i].browserURLChange(flexAppUrl);
                    } catch (e) {
                    }
                }
            } else {
                try {
                    getPlayer(objectId).browserURLChange(flexAppUrl);
                } catch (e) {
                }
            }

            currentObjectId = null;
        },
        getUserAgent: function () {
            return navigator.userAgent;
        },
        getPlatform: function () {
            return navigator.platform;
        }

    }

})();

// Initialization

// Automated unit testing and other diagnostics

function setURL(url) {
    document.location.href = url;
}

function backButton() {
    history.back();
}

function forwardButton() {
    history.forward();
}

function goForwardOrBackInHistory(step) {
    history.go(step);
}

(function (i) {
    var u = navigator.userAgent;
    var st = setTimeout;
    if (/webkit/i.test(u)) {
        st(function () {
            var dr = document.readyState;
            if (dr === "loaded" || dr === "complete") {
                i()
            }
        }, 10);
    } else if ((/mozilla/i.test(u) && !/(compati)/.test(u)) || (/opera/i.test(u))) {
        document.addEventListener("DOMContentLoaded", i, false);
    } else {
        window.onload = i;
    }
})(function () {
    BrowserHistory.initialize();
});
