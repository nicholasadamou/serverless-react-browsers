# Serverless React Browsers [![Build Status](https://travis-ci.org/nicholasadamou/serverless-react-browsers.svg?branch=master)](https://travis-ci.org/nicholasadamou/serverless-react-browsers)

![preview](preview.png)

A React-based application that utilizes a serverless lambda function which spawns a Chrome instance using Puppeteer and takes and returns a screenshot of a given website and displays the returned image on the appropriately CSS styled browser window (desktop or mobile).

## Development

### Requirements

-   [Node.js](https://nodejs.org/en/)
-   [Yarn](https://yarnpkg.com/en/) (recommended)

### Steps

Starting the front-end and *Netlify* serverless (λ) functions:

```bash
git clone https://github.com/nicholasadamou/serverless-react-browsers
cd serverless-react-browsers
npx yarn install
npx yarn netlify
```

## 📚 The Tech. Stack

This project uses the following technologies:

**The Front-End**:

- [**React.js**](https://reactjs.org/) - For building the interface along with:
  - [**React Context API**](https://reactjs.org/docs/context.html) - Context provides a way to pass data through the component tree without having to pass props down manually at every level.
  - [**React Hooks**](https://reactjs.org/docs/hooks-intro.html) - Hooks let you use state and other React features without writing a class
  - [**Styled-Components**](https://www.styled-components.com/) - for styling.

**The Back-End**:

- [**Netlify**](https://netlify.com/) - For serverless [**functions**](functions/).

## ⛓️ CI/CD Pipeline

This project uses the following CI/CD Pipeline:

1. [**Travis CI**](https://travis-ci.org/nicholasadamou/serverless-react-browsers) - Travis is used to test whether or not this project builds successfully.

## License

© Nicholas Adamou.

It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[license]: LICENSE
