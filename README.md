# REACT BASIC BOILERPLATE

This is a simple boilerplate project. It contains the basic necessary when you need to begin a React project, using [Redux](http://redux.js.org/docs/basics/UsageWithReact.html) architecture.

Small list of included things in the project
---
* React
* Redux
* Jest
* Enzyme
* ESLint (with Airbnb config included)
* Webpack
* Webpack-dev-server

The source code has this follow structure:
```
src
├── actions
│   └── trades.js
├── components
│   ├── profile-content.jsx
│   ├── trade.jsx
│   └── trade-list.jsx
├── constants
│   ├── properties.js
│   └── types.js
├── containers
│   ├── app.jsx
│   └── profile.jsx
├── index.jsx
├── reducers
│   ├── index.js
│   └── profile.js
└── utils
    └── connector.js
```
Getting started
===
Install dependencies: `yarn install`
Start application on 8080 port: `yarn start`
