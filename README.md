# WorldWideTickets
### This is a fullstack web application that simulates the purchase of airline tickets, like aviasales.ua, tickets.ua.

There are seven cities: Lviv, Kyiv, Paris, London, Dubai, New York, San Francisco. You can fly between these cities. There are direct flights and flights with connections. After you choose and book flight you can download PDF file of the boarding pass

![WWT Preview](https://i.ibb.co/9hbqrvM/wwtBack.png)

## Features

- Transfer flights
- If you are logged in, the data for booking is automatically filled in
- Email verification
- Generating  PDF file of the boarding pass
- Infinite scroll for found flights
- The database is filled with the generated data

## Technologies

This app is a written in TypeScript and JavaScript

- Frontend - TypeScript, React, React Router, Redux, Redux-Saga, Formik, Yup, Axios
- Backend - JavaScript, Node JS, Express, Sequelize, Passport, JWT, Nodemailer

The application has a MySQL database with ORM Sequelize. Entity relationship diagram of database:

![WWT DB](https://i.ibb.co/yp2LfdH/wwtDb.png)
