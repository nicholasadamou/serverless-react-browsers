# Serverless React Browsers [![Build Status](https://travis-ci.org/nicholasadamou/serverless-react-browsers.svg?branch=master)](https://travis-ci.org/nicholasadamou/serverless-react-browsers) [![CircleCI](https://circleci.com/gh/nicholasadamou/serverless-react-browsers.svg?style=svg)](https://circleci.com/gh/nicholasadamou/serverless-react-browsers)

![preview](preview.png)

A React-based application that utilizes a serverless lambda function which spawns a Chrome instance using Puppeteer and takes and returns a screenshot of a given website and displays the returned image on the appropriately CSS styled browser window (desktop or mobile).

## Development

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/) (recommended)

### Steps

Run the live-reload server on <http://localhost:3000>

```bash
make dev
```

Or run the live-reload server on <http://localhost:8888> with _Netlify_ (λ) functions:

```bash
make netlify
```

## 📚 The Tech. Stack

This project uses the following technologies:

**The Front-End**:

- [**React.js**](https://reactjs.org/) - For building the interface along with:
  - [**Styled-Components**](https://www.styled-components.com/) - for styling.

**The Back-End**:

- [**Netlify**](https://netlify.com/) - For serverless [**functions**](functions/).

## ⛓️ CI/CD Pipeline

This project uses the following CI/CD Pipeline:

1. [**Travis CI**](https://travis-ci.org/nicholasadamou/serverless-react-browsers) - Travis is used to test whether or not this project builds successfully.
2. [**CircleCI**](https://circleci.com/) - Used for the same reason as Travis CI.

## License

© Nicholas Adamou.

It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[license]: LICENSE
