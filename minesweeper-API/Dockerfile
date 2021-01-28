FROM openjdk:8-jdk-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN /usr/src/app/mvnw package

CMD ["java", "-jar", "/usr/src/app/target/minesweeper-0.0.1-SNAPSHOT.jar"]