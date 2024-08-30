FROM openjdk:17-jdk-alpine

WORKDIR /app

# Copiar el jar de la aplicación
COPY target/msvc-cursos-0.0.1-SNAPSHOT.jar /app/app.jar

EXPOSE 8002

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]