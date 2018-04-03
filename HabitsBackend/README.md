# Habits Backend

This is a proof-of-concept application, which demonstrates [Microservice Architecture Pattern](http://martinfowler.com/microservices/) using Spring Boot, Spring Cloud and Docker. With a pretty neat user interfaced developed with React Native, by the way.

# Functional Services
Habits Backend is decomposed into two core microservices. All of them are independently deployable applications, organized around certain business domains.

**Habits Service**
Contains general user input logic and validation: creation of a habit, modification for a particular day.

| Method | Path                   | Description                | Available from UI |
|--------|------------------------|----------------------------|-------------------|
| GET    | /api/{deviceId}        | get Habits By DeviceId     | Y                 |
| GET    | /api/{deviceId}/{name} | get a single habit by name | Y                 |
| POST   | /api                   | create a new Habit         | Y                 |

#### Statistics service

Performs calculations on major statistics parameters and captures datapoints for each device. Provides stats like total times done,current streak,best streak as well as time series data for habits

| Method | Path                    | Description                                 | Available from UI |
|--------|-------------------------|---------------------------------------------|-------------------|
| GET    | /api/{habitId}/stats    | get all stats for a habit id                | Y                 |
| POST   | /api/{habitId}/schedule | create a new schedule for a habit           | Y                 |
| DELETE | /api/{habitId}/schedule | delete an existing schedule for a habit     | Y                 |
| GET    | /api/{habitId}/schedule | get a schedule from a from date and to date | N                 |


# Infrastructure services
There's a bunch of common patterns in distributed systems, which could help us to make described core services work. [Spring cloud](http://projects.spring.io/spring-cloud/) provides powerful tools that enhance Spring Boot applications behaviour to implement those patterns.

![enter image description here](https://lh3.googleusercontent.com/dcboR3wdriFe6DjnnaMNxeDnH0hOEdqPi3nmcaZuqCszn4T3WH7PxcNXo2_17NXaIOhMJBxLveFh)

### Config service

[Spring Cloud Config](http://cloud.spring.io/spring-cloud-config/spring-cloud-config.html)  is horizontally scalable centralized configuration service for distributed systems. It uses a pluggable repository layer that currently supports local storage, Git, and Subversion.

### API Gateway

As you can see, there are three core services, which expose external API to client. In a real-world systems, this number can grow very quickly as well as whole system complexity. Actually, hundreds of services might be involved in rendering of one complex webpage.

In theory, a client could make requests to each of the microservices directly. But obviously, there are challenges and limitations with this option, like necessity to know all endpoints addresses, perform http request for each peace of information separately, merge the result on a client side. Another problem is non web-friendly protocols which might be used on the backend.

Usually a much better approach is to use API Gateway. It is a single entry point into the system, used to handle requests by routing them to the appropriate backend service or by invoking multiple backend services and  [aggregating the results](http://techblog.netflix.com/2013/01/optimizing-netflix-api.html). Also, it can be used for authentication, insights, stress and canary testing, service migration, static response handling, active traffic management.

Netflix opensourced  [such an edge service](http://techblog.netflix.com/2013/06/announcing-zuul-edge-service-in-cloud.html), and now with Spring Cloud we can enable it with one  `@EnableZuulProxy`annotation. In this project, I use Zuul to store static content (ui application) and to route requests to appropriate microservices. Here's a simple prefix-based routing configuration for Notification service:

### Service discovery

Another commonly known architecture pattern is Service discovery. It allows automatic detection of network locations for service instances, which could have dynamically assigned addresses because of auto-scaling, failures and upgrades.

The key part of Service discovery is Registry. I use Netflix Eureka in this project. Eureka is a good example of the client-side discovery pattern, when client is responsible for determining locations of available service instances (using Registry server) and load balancing requests across them.

With Spring Boot, you can easily build Eureka Registry with  `spring-cloud-starter-eureka-server`  dependency,  `@EnableEurekaServer`  annotation and simple configuration properties.

Client support enabled with  `@EnableDiscoveryClient`  annotation an  `bootstrap.yml`  with application name.

## Feedback welcome

Habits App is open source, and would greatly appreciate your help. Feel free to contact me with any questions.
