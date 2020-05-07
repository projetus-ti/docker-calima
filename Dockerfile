# Para buildar:
# docker build -t projetusti/calima:stable .
FROM tomcat:9-jdk11-adoptopenjdk-openj9

# Ajust imezone to Sao Paulo
ENV TZ=America/Sao_Paulo
RUN echo $TZ > /etc/timezone && \
apt-get update && apt-get install -y tzdata && \
rm /etc/localtime && \
ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
dpkg-reconfigure -f noninteractive tzdata && \
apt-get clean

# Java config
ENV CATALINA_OPTS="$CATALINA_OPTS -XX:MaxRAMPercentage=70 -Xgcpolicy:gencon -Xaggressive -Xclassgc -Xalwaysclassgc -Xtune:virtualized -XX:+IdleTuningGcOnIdle -Djdk.tls.ephemeralDHKeySize=2048 -DShowLog=true -Dcalima.log.checkMemory=true -Dcalima.gc.force=true -Djava.awt.headless=true -Duser.timezone=GMT-3 -Duser.language=pt -Duser.country=BR"

# Remove existing tomcat webapps
RUN rm -rf /usr/local/tomcat/webapps

# Copy files
COPY context.xml /usr/local/tomcat/conf/context.xml
RUN mkdir -p /usr/local/tomcat/webapps/calima
RUN mkdir -p /usr/local/tomcat/webapps/ROOT
COPY context.xml /usr/local/tomcat/webapps/ROOT
COPY calima /usr/local/tomcat/webapps/calima

EXPOSE 8080
CMD ["catalina.sh", "run"]
