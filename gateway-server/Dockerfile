FROM java:8
EXPOSE 8762
ADD /target/gateway-server-0.0.1-SNAPSHOT.jar gateway-server.jar
ENTRYPOINT ["java","-jar","gateway-server.jar"]