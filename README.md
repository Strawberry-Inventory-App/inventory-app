# inventory-app

A full-stack application to track your inventory

## Getting Started

1. `npm install`
2. `npm run seed`
3. `npm run server-dev`
4. In a seperate terminal, `npm run client-dev`
   -------------------------------------------------\\
   as a team! 💪

Tiers, described via User Stories

Tier I — MVP Application

As a User, I want to view all items in inventory

Sequelize Model for Item

Name, Description, Price, Category, Image

Express Route to GET all Items

Front-end View for all Items

As a User, I want to view any individual item

Express Route to GET one Item

Front-end view for one item (click to see)

Tier II — Adding an Item

As a User, I want to add an item by completing a form

Add Item front-end form

Express Route to ADD the Item

Form or Fetch request to add item when form is submitted

Tier III — Deleting an Item

As a User, I want to remove an item from inventory

Delete button on Single Item View f

Express Route to DELETE the Item

Fetch request to delete item when button is clicked

Tier IV — Updating an Item

As a User, I want to edit an item by filling a form

Edit form on Single Item View

Express Route to UPDATE the Item

Fetch request to update item when form is submitted

Tier V — Bonus Stuff

Models, Routes for Users and Orders

As a User, I want my Inventory site to be visually stunning

As a User, I want to be able to search through data based on search criteria

As a User, I want to add items to a cart and purchase

As a User, I want to use the application on a mobile browser

As an Admin, I want all Add and Edit item requests to have server-side validations
