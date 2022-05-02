# Twitter Clone Clean Architeture

A simple clone of the Twitter layout and implementation concepts of Clean Architecture using [SOLID principles](https://pt.wikipedia.org/wiki/SOLID) for a Front-end Technical assessment.

I created a simple page to load random data and open a modal to display profile info, the tests and other cool files are [here](#cool-files-path)


![Book reference](https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL.jpg )
![concepet img](./public/clean-architecture.jpeg)

# Technical overview

### Table of Contents

-   [Typescript](#typescript)
-   [Code overview](#code-overview)
-   [Available NPM Commands](#available-npm-commands)
-   [Other documentation for this service](#other-documentation-for-this-service)
-   [Local Development](#local-development) 
-   [Production build](#production-build)
-   [Project Descripition](#Critique)
 
 
## TypeScript

This project uses [TypeScript](https://wiki.indeed.com/display/FrontEnd/TypeScript) for production build and local development mode. 
 
the main entry point file (`/src/main/index.ts`).

## Code overview

This is a front-end TypeScript/JavaScript web app with support for universal React. 

All source code lives in `src` directory:

```
./src
├── app
│   └── usecases // here lives classes implementations
├── domain // here lives bussiness rules of project
│   ├── models 
│   └── usecases 
│       └── mocks 
├── infra // to locate external dependencies
├── main
│   ├── config // just tip for sass 
│   ├── factories // merge of presentation and domain layer.
├── presentation // All content from layout and React
│   ├── components // common components used in pages  
│   ├── hooks 
│   ├── pages // page (top-level) components and webpack entry files 
│   └── styles //globals styles 
└── utils  // global utilities  
 
``` 

## Cool files path

```
src
├── app
│   └── usecases
│       └── load-tweets
│           ├── load-local-tweets.spec.ts
│           └── load-local-tweets.ts
├── domain
│   ├── models
│   │   ├── tweet-model.ts
│   │   └── user-model.ts
│   └── usecases 
│       ├── load-tweet-list.ts
│       └── mocks
│           ├── index.ts
│           └── mock-tweet-list.ts 
├── main 
│   ├── factories
│      └── tweets-list
│           └── tweets-list-factory.tsx 
├── presentation
│   ├── components 
│   │   ├── Feed
│   │   │   ├── feed.spec.tsx
│   │   │   ├── index.tsx
│   │   │   └── styles.ts 
│   │   ├── Layout
│   │   │   ├── index.tsx
│   │   │   └── styles.ts 
│   │   └── Tweet
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── hooks
│   │   └── useProfileModal.tsx
└── utils
    └── date-utils.ts
```
 
## Local development

### Step 1: Installation

This web app requires Node LTS/dubnium (v10.16+).

Switch to required Node version with

```bash
nvm use
```

Install app dependencies with

```bash
npm i
``` 

### Step 2: Running the local dev server

Start local development server with

```bash
npm run start:dev
```

This will start three processes in parallel:

-   Node.js server using [`ts-node-dev`](https://github.com/whitecolor/ts-node-dev) 
-   webpack bundling for the server-side templates

In local development mode, the app will be available at [`http://localhost:3000`](http://localhost:3000)

All changes to the client source code will be automatically re-compiled
and updated in the browser using [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/).

Changes to the server code will trigger `ts-node-dev` to automatically restart Node.js server.
 


## Production build

### Step 1: Installation

This web app requires Node LTS/dubnium (v10.16+).

Switch to required Node version with

```bash
nvm use
```

Install app dependencies with

```bash
npm i
```   

### Step 2: Running the local dev server

Start local development server with

```bash
npm run start
```

This will start three processes in parallel:

-   Node.js server using [`ts-node-dev`](https://github.com/whitecolor/ts-node-dev) 
-   webpack bundling for the server-side templates

In local production mode, the app will be available at [`http://localhost:3000`](http://localhost:3000)

## Available NPM commands

| Command                         | Description                                                                                                                                                              |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `npm run start`                 | start webapp in production mode (no live-reload)                                                                                                                         |
| `npm run start:dev`             | start webapp in local development mode                                                                                                                                   |
| `npm run build`                 | build production version of static assets with webpack and daemon with TypeScript                                                                                        |
| `npm run test`                  | run unit tests and generate code coverage report                                                                                                                         |
| `npm run test:watch`            | run tests in watch mode, only run tests affected by current changes                                                                                                      |
| `npm run test:staged`           | run tests in staged files                                                                                                                                                | 
| `npm run test:ci`               | run all tests and generate code coverage report                                                                                                                          |
| `npm run test:update-snapshots` | updates test snapshots to capture current state                                                                                                                          |
| `npm run lint`                  | run [`eslint`](https://eslint.org/) check on JavaScript files                                                                                                            |
| `npm run lint:fix`              | run [`eslint`](https://eslint.org/) check and fix all possible offenders                                                                                                 |
  
## Critique

This is my reflection section about this short challange
- I spend my time demonstrating how to code test development-driven takes much time respect in the maximum SOLID principles and this takes much more time than make anyway. and created a mini clone version of Twitter with the theme of challenging to demonstrate my comprehension of CSS styling, also I left my branches without squashed to see show how commits are done before I finally merge them into the main branch.

- with more time I can finish all requirements easily, however, unfortunately, I do have not much free time, I'm making my college conclusion project, I actually have a full-time job and an 8 months baby need a lot of attention lol. I spend time setting up the environment using the new libraries, a job that I usually don't have to do because already exists and each company has its own. 

- Well, I didn't implement a load more features so I probably start for this, and also try to find the best practices to prevent many components rendering in screen to react doesn't have a lot of keys to check change and split the resources in AWS to improve loading of app per route.
