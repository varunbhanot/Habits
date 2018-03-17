FROM java:8-jre
MAINTAINER Varun Bhanot<varunbhanot@gmail.com>

ADD ./target/habit-service.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/habit-service.jar"]

EXPOSE 6000