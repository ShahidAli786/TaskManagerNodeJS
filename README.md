# Task Manager API

A simple and efficient Task Manager API built with Node.js, Express, and MongoDB. This RESTful API allows users to manage tasks with functionalities such as creating, updating, retrieving, and deleting tasks. The app uses JSON Web Tokens (JWT) for user authentication and supports user-specific task management.

## Features

- User authentication using JWT
- Create, read, update, and delete tasks
- User-specific task management
- RESTful API design
- TypeScript support

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- TypeScript
- Nodemon (for development)

## Installation

1. Clone the repository:

```bash
https://github.com/ShahidAli786/TaskManagerNodeJS.git
cd TaskManagerNodeJS
```

2. Install dependencies:

```bash
yarn install
```

3. Create a .env file in the root directory with the following variables:

```bash
PORT=Your Port
MONGODB_URL=mongodb://localhost:27017/task-manager
JWT_KEY=your_jwt_secret_key_here
```

## Running the app

For development (with auto-reload):

```bash
yarn run dev
```

For production:

```bash
yarn build
yarn start

```

## Endpoints

For endpoint information Please check `rest-api.http` file.
