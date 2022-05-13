# vue-TODO

> TODO APP done with Vue and Vuex

## Features
* Vue.js v2
* Vuex v2
* Handle state with actions and mutations (Vuex)
* Getters to manage partial state in Components
* Scoped styles with Sass/SCSS
* User can create multiple boards, lists and tasks
* Vue-Router to show different boards
* Persistence with Firebase

## Configure

Create a new project on [Firebase Console](https://console.firebase.google.com)
and then create a web app and copy the configuration object.

Rename `src/firebase/settings.js.sample` to `src/firebase/settings.js` and paste it the firebase configuration project.

Open `.firebaserc` file and change the value of default project for your just created firebase project.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).