# uniQUEode_brainmade jewelery
##### Softuni ReactJS Final Project

## Overview

The application is front-end app (SPA) for a Jewelry Online Store for my friend's project **uniQUEode**. 

The main "unit" in this platform is the designs page which can be **viewed, loved, add to cart, created, edited and deleted** depending on certain **user roles**.

*Guests* can view pages as **Home, About, Designs, Contact**. They can **register/login** with an *email* and *password* for more functionality.

*Users* may view and **love** designs, which saves the designs to their **profile**. 
Users can also add designs to their **cart**.

*Admins* role is defined on server side. They can **create**, **edit** and **delete** designs, they've created. 
They don't have access to love and add to cart functionalities.

**This project was created by Yoana Robeva for the purposes of React.JS Softuni Course, Feb-Apr 2023.**

## Public part

This part of the application is designed for non-registered users. These users have access to the following:

- Home Page -> You can find basic information about uniQUEode concept.
- About Page -> More information about uniQUEode.
- Designs Page -> Designs catalog which *lists* all available designs and brief information about each. When you move your cursor over the design image, you can choose to go to design *details* page. You can *sort* and *filter* the list of designs, also *change pages*.
- Design details -> A page offering more detailed information about each design and functionalites for authenticated users.
- Contact -> On Contact page you can view uniQUEode location and send message to them. *(the message functionality is not implement yet and the location is randomly set!)*
- Login/Register -> This page appears when you click on Header's sign-in icon. If you don't have profile, you can switch to sign-up form.

## Private part

### Users

- Love designs -> On Designs Catalog Page you can *love* designs when you move your cursor over design image and click on the heart icon. You can also *love* designs on Design Details Page by clicking "Love it!"
- Add design to cart -> On Design Details Page you can add the design to your cart by choosing if you want only the design *code* or you want *earrings, necklace or broche* made of this code. You can also choose the desire *quantity*.
- Profile -> Profile page where you have list of your loved designs. You can go to Design Details by clicking on them.
- Cart -> On this page you have all your added to cart designs and information such as price, quantity, etc.. You can proceed to purchase. *(Purchase is not implement yet)*

### Admins

- Create Design -> A page containing a form for creation of design.
- Edit Design -> A page with a form for modification of a particularly selected design, which the current admin added.
- Delete Design -> The functionality to delete selected design, which the current admin added.

Admins are (initialized on server): 

- peter@abv.bg : 123456
- george@abv.bg : 123456
- admin@abv.bg : admin

## Technical Details

**The client application is build with:**
- React.js
- HTML + CSS Free tempaltes from Templetamo
- Bootstrap

If you want to run the project, you have *package.json* file in the main client folder.

``npm install``

``npm start``

**The server used in the project is [Softuni practice server](https://github.com/softuni-practice-server/softuni-practice-server).**

It was modified, so the initial users have admin role and the initial collecitons are changed. If you want to start the server, read its documentation.
