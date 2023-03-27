# uniQUEode_brainmade jewelery
##### Softuni ReactJS Final Project

## Overview

The application is front-end app (SPA) for a Jewelry Online Store for my friend's project **uniQUEode**. 

The main "unit" in this platform is the designs page which can be viewed, loved, add to cart, created, edited and deleted depending on certain user roles.

*Guests* can view pages as **Home, About, Designs, Contact**. They can **register/login** with an *email* and *password* for more functionality.

*Users* may view and **love** designs, which saves the designs to their **profile**. 
Users can also add designs to their **cart**.

*Admins* role is defined on server side. They can **create**, **edit** and **delete** designs, they've created. 
They don't have access to love and add to cart functionalities.

Admins are: 
- peter@abv.bg : 123456
- george@abv.bg : 123456
- admin@abv.bg : admin

**This project was created by Yoana Robeva for the purposes of React.JS Softuni Course, Feb-Apr 2023.**

## Technical Details

**The client application is build with:**
- React.js
- HTML + CSS Free tempaltes from Templetamo
- Bootstrap

If you want to run the project, you have *package.json* file in the main client folder.

``npm install``

``npm start``

**The server** used in the project is [Softuni practice server](https://github.com/softuni-practice-server/softuni-practice-server). 
It was modified, so the initial users have admin role and the initial collecitons are changed. If you want to start the server read its [documentation](https://github.com/softuni-practice-server/softuni-practice-server#readme)