Configuración y Ejecución del Proyecto con Docker
Para facilitar la configuración y ejecución de este proyecto, hemos utilizado Docker y Docker Compose. A continuación, se describen los pasos necesarios para ejecutar el proyecto en un entorno Dockerizado.

Requisitos Previos
Docker: Asegúrate de tener Docker instalado en tu sistema. Puedes descargarlo e instalarlo desde Docker's official website.
Docker Compose: Docker Compose generalmente se instala con Docker. Si no lo tienes, puedes encontrar instrucciones para la instalación en Docker Compose's official documentation.
Estructura del Proyecto
Este proyecto utiliza Docker y Docker Compose para ejecutar dos servicios principales:

Backend: Aplicación Node.js.
Frontend: Aplicación Next.js.
Archivos de Configuración
Dockerfile.backend: Dockerfile para construir la imagen del backend.
Dockerfile.frontend: Dockerfile para construir la imagen del frontend.
docker-compose.yml: Archivo de configuración para Docker Compose.
Pasos para Ejecutar el Proyecto
Construir y Ejecutar los Contenedores

En el directorio raíz de tu proyecto, ejecuta el siguiente comando para construir las imágenes y levantar los contenedores:

bash
Copy code
docker-compose up --build
Si prefieres ejecutar los contenedores en segundo plano, puedes usar el flag -d:

bash
Copy code
docker-compose up --build -d
Acceder a la Aplicación

Una vez que los contenedores estén en funcionamiento, podrás acceder a la aplicación frontend en tu navegador en http://localhost:3001 y al backend en http://localhost:3000.