FROM java:8-jre
MAINTAINER Varun Bhanot<varunbhanot@gmail.com>

ADD ./target/regitry-service.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/regitry-service.jar"]

EXPOSE 8761