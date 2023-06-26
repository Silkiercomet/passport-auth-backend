# passport Auth 

This is a backend authentication app that provides user registration, login, protected routes, and logout functionality. It is built using Express.js, Passport.js, and MongoDB.

## Features

- User registration: Users can sign up with a unique username and password.
- User login: Users can log in with their registered credentials.
- Protected routes: Certain routes can only be accessed by authenticated users.
- Logout: Users can log out of their session.

## Prerequisites

Before running the application, ensure that you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org).
- MongoDB: [Install MongoDB](https://www.mongodb.com/try/download/community) or use a cloud-based MongoDB service.

## Getting Started

1. Clone the repository:

   ```bash
   git clone [<repository-url>](https://github.com/Silkiercomet/passport-auth-backend.git)

2. Intall dependencies:

cd authentication-app
npm install

3. Set up environment variables:

* Create a .env file in the root directory of the project.

* Define the following environment variables in the .env file:

MONGO_URI=<your-mongodb-uri>
PORT=<port-number>

4. Start the application

npm start

## API end points

- POST /api/auth/signup: Register a new user with a unique username and password.
- POST /api/auth/login: Log in with a username and password.
- GET /api/auth/protected-route: Access a protected route (requires authentication).
- GET /api/auth/logout: Log out the currently authenticated user.

## Tech stack

* Express.js: Fast and minimalist web application framework for Node.js.
* Passport.js: Authentication middleware for Node.js.
* MongoDB: NoSQL database for storing user information.
* Mongoose: MongoDB object modeling for Node.js.
* Crypto: Built-in Node.js module for cryptographic functionality.
