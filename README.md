# Introductory Full-Day Workshop for Cypress.io

## Pre-Installation Directions

1. Be sure to have Node and git installed.

2. clone this repository with

```
git clone https://github.com/joeeames/cypress_io_introduction_workshop.git
```

3. Then install with

```
npm install
```

Check your installation by doing the following: 4. Open up 3 terminal windows all within the cypress_io_introduction_workshop directory

5. In one terminal run the following command from the root directory for the repo:

```
npm run server
```

6. In another terminal run the following command:

```
npm start
```

7. then browse to localhost:4200 and make sure that the website is running.

8. Finally double check your cypress installation by running the following command in a 3rd terminal

```
npx cypress open
```

A cypress window should open. If it does you are good.

# Andie notes

## getting started

- To load types to make cy methods available in tests, can use this syntax at the start of every `spec.ts` file:

`/// <reference types="cypress" />`

- Or, in tsconfig.json, in compilerOptions, add:

`"types": ["cypress]`

- Cypress is asynchronous

## questions

1. As I'm working on a test, can I flag or label it so that cypress only reruns that test (quick feedback, I don't need all of them to run)
