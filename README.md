# WebApp Rueda del 1 al 100

Esta es una aplicación web simple creada con Next.js, React y Node.js que permite seleccionar un número aleatorio entre 1 y 100. La aplicación está diseñada para ofrecer una experiencia de usuario interactiva y divertida mediante una interfaz sencilla.

## Características

- **Generación de Números Aleatorios**: La aplicación selecciona un número aleatorio entre 1 y 100 cada vez que se hace clic en el botón.
- **Interfaz de Usuario**: Desarrollada con React y Next.js para proporcionar una experiencia de usuario fluida y responsiva.
- **Backend en Node.js**: Utiliza Node.js para manejar la lógica de generación de números aleatorios.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para el desarrollo del frontend y el rendering del lado del servidor.
- **React**: Biblioteca para construir la interfaz de usuario.
- **Node.js**: Entorno de ejecución para el backend y la lógica de generación de números.

## Cómo Ejecutar el Proyecto

1. **Clonar el Repositorio**

   ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-repositorio>
   ```

# Configuración y Ejecución del Proyecto con Docker

Para facilitar la configuración y ejecución de este proyecto, hemos utilizado Docker y Docker Compose. A continuación, se describen los pasos necesarios para ejecutar el proyecto en un entorno Dockerizado.

## Requisitos Previos

1. **Docker**: Asegúrate de tener Docker instalado en tu sistema. Puedes descargarlo e instalarlo desde [Docker's official website](https://www.docker.com/get-started).
2. **Docker Compose**: Docker Compose generalmente se instala con Docker. Si no lo tienes, puedes encontrar instrucciones para la instalación en [Docker Compose's official documentation](https://docs.docker.com/compose/install/).

## Estructura del Proyecto

Este proyecto utiliza Docker y Docker Compose para ejecutar dos servicios principales:

- **Backend**: Aplicación Node.js.
- **Frontend**: Aplicación Next.js.

### Archivos de Configuración

- **Dockerfile.backend**: Dockerfile para construir la imagen del backend.
- **Dockerfile.frontend**: Dockerfile para construir la imagen del frontend.
- **docker-compose.yml**: Archivo de configuración para Docker Compose.

## Pasos para Ejecutar el Proyecto

### Construir y Ejecutar los Contenedores

En el directorio raíz de tu proyecto, ejecuta el siguiente comando para construir las imágenes y levantar los contenedores:

```bash
docker-compose up --build
```
Si prefieres ejecutar los contenedores en segundo plano, puedes usar el flag -d:
```bash
    docker-compose up --build -d
```