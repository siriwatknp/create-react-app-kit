<p align="center"><img src="https://user-images.githubusercontent.com/18292247/51427387-0cc5bb00-1c2a-11e9-8568-8f6ddf121d3e.png" title="View tutorial" alt="React, React Router, Redux and Redux Thunk" width="300"></p>

# Table of Contents


## Libraries
- [react](https://reactjs.org)
- [react-router](https://reacttraining.com/react-router/)
- [redux](https://redux.js.org/)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [firebase](https://firebase.google.com)
- [material-ui](https://material-ui.com/) 

## Component Test
- [storybook](https://storybook.js.org/)

## Installation

```bash
git clone https://github.com/siriwatknp/create-react-app-kit.git
cd create-react-app-kit
yarn
```

## Get started

if you dont use firebase skip step 1 and 2

1. follow this document for installing firebase
https://firebase.google.com/docs/web/setup

2. copy config from your firebase project and then add to file `src/firebase/fireConfig.js`
in `developmentConfig`. Create another project for your production version and put config in `productionConfig`
```bash
{
  developmentConfig: {
    // your firebase dev config 
  },
  stagingConfig: {
    // you can use developmentConfig 
  },
  productionConfig: {
    // your firebase production project 
  }
}
```

```bash
yarn start
```
then open another terminal and run this
```bash
yarn storybook
```

This boilerplate is built using [create-react-app](https://github.com/facebook/create-react-app)
