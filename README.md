# vue_express_tab_tracker

<https://github.com/stevegmag/vue_express_tab_tracker>
- http://localhost:8081/status

## Built using tutorial at:
https://www.youtube.com/watch?v=Fa4cRMaTDUI&t=2878s

- 00:00 Project description
- 6:35 Git Setup
- 17:47 Backend setup
- 36:40 Register page setup﻿

## Base: vuejs/vue-cli
<https://github.com/vuejs/vue-cli>
https://cli.vuejs.org/


## Basic NPM VUE-CLI Project Setup

- clone repo from github
- install vue cli <br>
`> npm install -g @vue/cli `
- switch directory to new porject <br>
- check out vue cli packages available <br> 
`> vue list `
- Run vue init to create client
`> vue init webpack client`
- Install npm / node dependencies
`> npm install `

- Start Dev App: <br>
`> npm run dev `
 <br> or <br>
 `> npm start `

checkout in browser: localhost:8081 (Modified port number)

## Basic NPM Express Server Setup (17:47)
- create *'server'* directory at project root and cd into it. <br>
force a new package.json in theis dir for server node_modues<br>
`> npm init -f `<br>
- install a few things... (nodemon, eslint) <br>
- initialize eslint<br>
`> cd server/node_modules/eslint/bin`<br>
`> node eslint.js --init`<br>
<br>
- start up server<br>
`> npm start `<br>

- install some more things for the project: express, body-parer, cors, morgan<br>
`> npm install --save express body-parser cors morgan`<br>
- (26:32) add these new modules to app.js file with `const [value] = require('[value]')`<br>

(33:00) use chrome app *POSTMAN* to simulate post functions.<br>


### Intro : part 2
- https://youtu.be/Fa4cRMaTDUI?t=36m53s
- https://youtu.be/Fa4cRMaTDUI?t=47m2s