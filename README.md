# Habits App

Inspired by the very awesomely titled article  [Every time you build a to-do list app, a puppy dies](https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-here-are-some-better-project-ideas-279d4055f77), I decided to create a proper full stack project . The result is Habits app is a habit tracker made with [React Native](https://facebook.github.io/react-native/) and a microservices backend developed using spring cloud netflix suite.

This is a proof-of-concept application which demonstrates [Microservice Architecture Pattern](http://martinfowler.com/microservices/) using Spring Boot, Spring Cloud and Docker. With a pretty neat user interface, developed using React Native,Redux and Redux Sagas.


# Parts
For details please visit the readme of respective part of the project

 1. [Habits UI](https://github.com/varunbhanot/Habits/tree/master/HabitsUI) - Native app created with react native. This app can be built to be cross platform and can be run on both android and ios
 2. [Habits Backend](https://github.com/varunbhanot/Habits/tree/master/HabitsBackend) - Build using Spring boot, Spring cloud and Docker to demonstrate a typical Microservice architecture. I've tried to follow as much as [12 factor principles](https://12factor.net/) while developing the services.
