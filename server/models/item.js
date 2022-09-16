//import our db, Model, DataTypes
const { db, DataTypes } = require('../db')

//Creating a item class from the Model parent class
const Item = db.define("items", {
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Price: DataTypes.NUMBER,
    Category: DataTypes.STRING,
    Image: DataTypes.STRING,

})



//exports
module.exports = { Item }