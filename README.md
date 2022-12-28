
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Installation
First you need to install Sqlite3 locally
```bash
$ npm install
```

## Running the app

```bash
$ npm run start

$ npm run start:dev

$ npm run start:prod
```

## API Endpoints

1. POST: http://127.0.0.1:3001/auth/signup <br/>
   Params: { username, password, role }

2. POST: http://127.0.0.1:3001/auth/login <br/>
   Params: { username, password }