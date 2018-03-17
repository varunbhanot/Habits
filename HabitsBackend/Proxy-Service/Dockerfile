FROM java:8-jre
MAINTAINER Varun Bhanot<varunbhanot@gmail.com>

ADD ./target/proxy-service.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/proxy-service.jar"]

EXPOSE 4000