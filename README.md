## Description

Media-Mint-Microservice is a nest.js application used to fetch the API and store the data in the Database, Publish the User data to the frontend and update the data in the table.

## Note:

We need to run both the microservice and react app, simultaneously to make it work since I'm not using domain here for the APIs. Kindly install the node_modules using `npm i` command (in both microservice and react app) before starting the application. 

## Command to run react app:

npm start

## Installation steps

```bash
$ npm install <package-name>
```

## Dependent packages required to be installed

"@nestjs/axios",
"@nestjs/common",
"@nestjs/core",
"@nestjs/mongoose",
"@nestjs/platform-express",
"axios",
"class-validator",
"mongoose",
"reflect-metadata",
"rimraf",
"rxjs"

## Running the microservice app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```
