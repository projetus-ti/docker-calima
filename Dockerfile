# Para buildar:
# docker build -t projetusti/calima:stable .
FROM tomcat:9-jdk11-adoptopenjdk-openj9

# Java config
ENV CATALINA_OPTS="$CATALINA_OPTS -XX:MaxRAMPercentage=90 -XX:InitialRAMPercentage=90 -XX:+ExitOnOutOfMemoryError -Xdump:tool:events=throw+systhrow,filter=java/lang/OutOfMemoryError,exec='kill -TERM 1' -Xgcpolicy:gencon -Xclassgc -Xalwaysclassgc -Xtune:virtualized -XX:+IdleTuningGcOnIdle -Djdk.tls.ephemeralDHKeySize=2048 -DShowLog=true -Dcalima.log.checkMemory=true -Dcalima.gc.force=true -Djava.awt.headless=true -Duser.timezone=GMT-3 -Duser.language=pt -Duser.country=BR"


# Remove existing tomcat webapps
RUN rm -rf /usr/local/tomcat/webapps

# Copy files
COPY context.xml /usr/local/tomcat/conf/context.xml
RUN mkdir -p /usr/local/tomcat/webapps/calima
RUN mkdir -p /usr/local/tomcat/webapps/ROOT
COPY context.xml /usr/local/tomcat/webapps/ROOT
COPY crossdomain.xml /usr/local/tomcat/webapps/ROOT
COPY calima /usr/local/tomcat/webapps/calima

EXPOSE 8080
CMD ["catalina.sh", "run"]
