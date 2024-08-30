FROM openjdk:17-jdk-alpine

WORKDIR /app

# Copiar el jar de la aplicación
COPY target/msvc-usuarios-0.0.1-SNAPSHOT.jar /app/app.jar

EXPOSE 8001

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]