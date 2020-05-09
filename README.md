# Employee Tracker

## Badges

![TopLanguage](https://img.shields.io/github/languages/top/Maxguojiaqi/NodeExpressHandleBars)
![License](https://img.shields.io/github/license/Maxguojiaqi/NodeExpressHandleBars)
![reposize](https://img.shields.io/github/repo-size/Maxguojiaqi/NodeExpressHandleBars)

## License

Copyright 2020 - Max Guo. Code released under the MIT license.

## User Story
```
As a User
I want to be able to input the names of burgers they'd like to eat.
So that I can eat them or re-order them
```
## Table of Content

* [Description](#Description)
* [Structure](#Structure)
* [Demo](#Demo)
* [Contributing](#Contributing)
* [Reference](#Reference)


## Description

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page. The burgers on the right side of the page can be 're-orderd' to move to the left side of the page. Every burger will be stored in a database, whether devoured or not.


## Structure

All the files and directories look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│
│── views
│    ├── index.handlebars
│    │── layouts
│    │      └── main.handlebars
│    └── partials
│           └── burger
│                 └── burger-block.handlebars
│ 
├── package.json
│   
│
├── server.js

```


## Demo

Demo Link : 

## Contributing

Max, github:https://github.com/Maxguojiaq

## Reference
Mysql NPM: https://www.npmjs.com/package/mysql
express-handlebars NPM: https://www.npmjs.com/package/express-handlebars
express NPM: https://www.npmjs.com/package/express

