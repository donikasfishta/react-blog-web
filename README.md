WEB BLOG APP
-----------------------------

In this repository you can find a BLOG App that is build in MERN Stack.

LINK Of web app Deployed:
https://blog-app-ubt.herokuapp.com/

Blog APP
This repository contains two projects:

Client - Contains a React project that is the user-facing part. It has these features:
View all blogs
View a specific blog ( with visitor count, comments, and ability to add comments)
Search blogs by tag, title and descritpion
Show most popular article in sidebar.
Ability to add a new post.
Abiliti to create a user

api - is the REST API part of the project, and is written in JS as well, using NodeJS.
It uses expressjs to create REST API.

MongoDB - document database
Express(.js) - Node.js web framework
React(.js) - a client-side JavaScript framework
Node(.js) - the premier JavaScript web server

Blogg app is build in above tech

To run the app, in reository you can find to folder called api and client.
api folders containes all the backend routes and connetction to Database.
client folder containes all the frontend code of our app.

You Need to Install in api folder:

nstall npm package

```jsx
npm i
```

First we going to install express server

```jsx
npm i express
```

To conect our MongoDB

```jsx
npm i mongoose
```

To connect this mongoDB we are going to take private url from this page and ist going to include our password our username, and we need to hide them in api folder, and to do that we are going to use dotenv package

```jsx
npm i dotenv
```

We are going to upload some images and to do that we are going to install malter

```jsx
npm i malter
```

We need to initialize the project

```jsx
npm init

```

we install nodemon package, this helps to listen to any changes and update in run mode

```jsx
npm i nodemon

```

At package.json at line debug we change

```jsx
"test": "echo \"Error: no test specified\" && exit 1"
Change to
"start": "nodemon index.js"
```

To hide password in database we install bcrypt
npm i bcrypt

In client folder you need to install:
npm i axios

You need to Connect you MongoDB database, you take the link of database and you save it in .env file in api folder

after you finished all the steps above just npm start in two folders

Author:
Kujtim Krasniqi
Donika Sfishta
Copyright© 2022 @authors. All rights reserved.
