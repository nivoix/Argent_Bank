# Project 12 - Argent Bank API

This codebase contains the code needed to run the backend and the frontend for Argent Bank.

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/) for the backend
- [Node.js v20](https://nodejs.org/en/) for the frontend

use [nvm] for change your version of Node(https://github.com/coreybutler/nvm-windows/releases)

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

  Go to the [MongoDB website](https://www.mongodb.com/cloud/atlas) and sign up for a free account. Once you have access to your dashboard, create a cluster then configure it with the "AWS option" and only the free options so you can develop for free.
  Next, you will need to add a user who has the ability to read and write to any database. Choose your desired username and password and write them down, as you will need them to connect your API to your cluster.

### Instructions

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the right folder
1. Run the following commands:

#### First of all, in the folder `Argent-Bank`

```bash
# Check Node.js version
node --version

# Install if necessary the version 20
nvm install 20

# Change if necessary the version
nvm use 20

# Install dependencies
npm install

# Start the frontend
npm run dev
```

#### secondly, in the folder `Argent_Bank_server\.env`

replaced in DATABASE_URL: "Username" by the username you chose when you created your user on MongoDB Atlas
and
replaced in DATABASE_URL: "1234azerty" by the password you chose when you created your user on MongoDB Atlas

#### Third, in a other terminal, in the folder `Argent_Bank_server`

Please make sure you have the right versions. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Install if necessary the version 12
nvm install 12

# Change if necessary the version
nvm use 12

# Install dependenciesin
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://localhost:3001 and you will now have two users in your MongoDB database!

## Atlas Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`
