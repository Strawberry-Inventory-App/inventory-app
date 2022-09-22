# inventory-app

A full-stack application to track your inventory

## Getting Started

1. `npm install`
2. `npm run seed`
3. `npm run server-dev`
4. In a seperate terminal, `npm run client-dev`
   -------------------------------------------------\\
   as a team! 💪
## Inventory App by Sheree &amp; Lavor &amp; Kris

The Inventory App will allow a user to  select an item from the inventory database. A user will be able to use this api to manage their inventory database. This app allows for full CRUD operations for  these four models: Name, Description, Price, Category, Image. 

### Technical requirements ⚙️
- [x] Sequelize Model for Item.
- [x] Use Spring Profiles for environment settings.
- [x] At least one API endpoint must perform full CRUD create, read, update, and delete actions.
- [x] Other API endpoints can perform CRUD 
- [x] Expose CRUD routes that were built using REST conventions.
- [x] Document each end-point

### Necessary Deliverables 🏁
- [x] A Git repository hosted on GitHub.
- [x] A README.md file with:
- [x]  Installation instructions for any dependencies.

### User Stories 🦄
***
* When viewing items- The items should display Name, Description, Price, Category, Image
* Ability to add, view, update and remove an item's: Name, Description, Price, Category, Image
Tiers, described via User Stories

###Tier I — MVP Application***

   *As a User, I want to view all items in inventory*

    - [x] Sequelize Model for Item
    - [x] Name, Description, Price, Category, Image
    - [x] Express Route to GET all Item
    - [x] Front-end View for all Item

   *As a User, I want to view any individual item*

    - [x] Express Route to GET one Item
    - [x] Front-end view for one item (click to see)

###Tier II — Adding an Item

   *As a User, I want to add an item by completing a form*

     - [x] Add Item front-end form
     - [x] Express Route to ADD the Item
     - [x] Form or Fetch request to add item when form is submitted

###Tier III — Deleting an Item
   *As a User, I want to remove an item from inventory*
	   
      - [x] Delete button on Single Item View
	   - [x] Express Route to DELETE the Item
	   - [x] Fetch request to delete item when button is clicked

###Tier IV — Updating an Item
   *As a User, I want to edit an item by filling a form*

	 - [x] Edit form on Single Item View
	 - [x] Is this form going to be pulled from information already given? Or will we use a blank form (use a new form)
	 - [x] Express Route to UPDATE the Item
	 - [x] Fetch request to update item when form is submitted

###Tier V — Bonus Stuff
         
      [ ] Models, Routes for Users and Orders
      [x] As a User, I want my Inventory site to be visually stunning
      [ ] As a User, I want to be able to search through data based on search criteria
      [ ] As a User, I want to add items to a cart and purchase
      [x] As a User, I want to use the application on a mobile browser
      [ ] As an Admin, I want all Add and Edit item requests to have server-side validation

