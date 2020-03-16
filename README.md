# crispy-web

Web UI to manage databases. Communicates with `crispy-api`

## Local setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- NodeJS version 12
- NVM - https://github.com/nvm-sh/nvm
- yarn - https://github.com/yarnpkg/yarn

### Project setup

To setup this project you have to run following commands:

- `nvm use` To activate specified NodeJS version
- `yarn` Install dependencies

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Graphql codegen

Once the graphql schema was changed you need to generate new types. For this you'd need to do a few things:
- deploy crispy-api branch with new schema
- run `yarn run graphql-codegen`

Also you can generate new types with local environment:
- in `codegen.yml` change shema link to local
- add `NODE_TLS_REJECT_UNAUTHORIZED=0` flag to yarn `graphql-codegen` command
- run `yarn run graphql-codegen`


## CONTRIBUTING

Contributions are always welcome, no matter how large or small
