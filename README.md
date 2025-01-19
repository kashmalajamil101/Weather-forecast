Title: Weather Forecast Application

A microservices-based web application that allows users to get weather forecasts for a given city. This project uses Docker Compose to integrate and manage the frontend, backend, and database services seamlessly.

## 1. Project Description
This application provides a platform where users can input a city name and receive weather data. It demonstrates the use of microservices architecture with separate services for the frontend, backend, and database. The backend processes user requests, retrieves/stores weather data in a MySQL database, and responds to the frontend.

## 2. Features or services :
Three services used ;
- Input a city name to get weather data.(frontend)
- Backend API processes and handles user requests.(backend)
- MySQL database for persistent storage of weather data.(database)
- Fully containerized with Docker for easy deployment.

Working :
1.Firstly we go to docker and give path of the files  location
cd C:\Users\SOFTAGE\Desktop\weather-forecast-app
2.Build microservice app : docker-compose up --build
Than our services start running and container made according to required services
3.Than we integrate our three services  with the help of port for better efficient working of app
4.Thus by accessing the port our backend looks like this ,Welcome to the Weather Forecast API! Available endpoints: /weather
## 3. Technologies Used
- Frontend:
 Contains the frontend files (index.html, etc.)
  - HTML and JavaScript for the user interface.
Description: Provides the user interface for interacting with the application.
- Accessible at: [http://localhost:3001](http://localhost:3001)
- Key Functionality:
  - Accepts user input (city name).
  - Sends requests to the backend service.
  - Displays weather data received from the backend.
- Backend:
- Processes requests from the frontend.
  - Connects to a MySQL database to store and retrieve weather information.
  - Node.js and Express.js for handling API requests  like /weather?city=<city>.
Server.js,package.json and Dockerfile(these three files required node.js ,configured for your backend setup)
API layer for processing requests and managing interactions with the database.
- Accessible at: [http://localhost:5000](http://localhost:5000)
- Key Functionality:
  - Provides an endpoint `/weather` to handle city-based weather queries.
 - Database:
  - MySQL for storing weather data.
Description: MySQL database for persisting weather data.
- Accessible on Host: `localhost:3307`
- Key Functionality:
  - Stores weather data with fields like city, temperature, and description.
  - Supports backend queries to retrieve or save data.
- ## Prerequisites And Containerization:
  - Docker and Docker Compose for service orchestration.
- Docker installed on your system.
