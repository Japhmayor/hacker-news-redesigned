<div align="center">
  <a href="https://hn.tigran.io/">
    <img src="https://hn.tigran.io/splash.png" alt="" width=100 height=100>
  </a>

  <h1 align="center">Hacker News Redesigned</h3>

  <p align="center">
    A Hacker News clone designed with better reading experience, performance, and accessibility in mind.
  </p>

  <p><a href="https://hn.tigran.io/"><strong>See the live demo »</strong></a></p>
</div>

## Overview
The project is written with [React](https://reactjs.org/) and [React Apollo](https://github.com/apollographql/react-apollo), using custom server-side rendering.

## Stack
* [React](https://reactjs.org) – client-side logic
* [React Apollo](https://github.com/apollographql/react-apollo) – GraphQL client
* [React Router](https://reacttraining.com/react-router/web/guides/philosophy) – handling routes
* [React Helmet](https://github.com/nfl/react-helmet) – `<head>` tags management
* [webpack 4](https://webpack.js.org/) – bundling and building
* [Babel 7](https://babeljs.io/) – transpiling JavaScript
* [Node.js & Express](https://expressjs.com/) – server rendering
* [NGINX](https://www.nginx.com/) – reverse proxy over Express for enabling HTTP/2,  serving & caching static assets.

## API
The API for the client is a Node-based GraphQL wrapper over [Hacker News Firebase API](https://github.com/HackerNews/API), implemented with [Apollo Server](https://github.com/apollographql/apollo-server).  For more details see the [API repository](https://github.com/tigranpetrossian/hn-api).

## Build Process
Webpack 4 is used to bundle the project, with Babel 7 beta taking care of transpilation. 4 separate configs are used for compiling server and client builds for both development and production.

## CSS
The styling of the project is implemented with SCSS modules: ([ITCSS](https://github.com/ahmadajmi/awesome-itcss))-like architecture is used for global styling and tools (mixins, variables, functions). One local `.scss` file is used per component. The CSS output is extracted with [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) during the production build, and because of being fairly small (4KB gzipped) is directly embedded into HTML files with Express.

## Running locally

1. Clone the repository: `git clone git@github.com:tigranpetrossian/hacker-news-redesigned.git`
2. Run: `yarn install`
3. Start in development mode: `yarn start `
4. Run production mode locally: `yarn start:prod:local`

Note: you will need to have the API running locally as well. See the [API repository](https://github.com/tigranpetrossian/hn-api) for details.

## Upcoming Improvements

### Design and usability
* Subtle navigation transitions
* Route change announcement with screen readers
* Collapsing comments
* Subtle notifications on feed updates

### Code
* Font loading improvements to eliminate FOIT altogether
* Code splitting
* Client-side cache invalidation: heavily caching the data on the client, and invalidating by listening to [API updates](https://hacker-news.firebaseio.com/v0/updates.json)
