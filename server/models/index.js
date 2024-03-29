const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = sequelize.define("items", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.DECIMAL,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Item
};

