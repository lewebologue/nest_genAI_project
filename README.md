##
# <div align="center">Nest GenAI Project</div>  

This project is fully made with Github Copilot. As a POC, the purpose of this API is to demontrate that GenAI is turfu.  

<br/>  

## Technologies 

### Backend  
<div align="center">  
<a href="https://www.typescriptlang.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="50" /></a>  
<a href="https://nodejs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" /></a>  
<a href="https://nestjs.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nestjs.svg" alt="NestJS" height="50" /></a>  
</div>

### Database  
<div align="center">  
<a href="https://www.mongodb.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="50" /></a>  
<a href="https://www.prisma.io/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/prisma.png" alt="Prisma" height="50" /></a>  
</div>

## Installation

Create a `.env` file in the backend root of the project with the following content:

```env
DATABASE_URL="<your mongo DB connection string>"
```

```bash
$ npm ci
$ npx prisma generate
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

