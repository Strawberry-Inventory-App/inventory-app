const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET all items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

//GET one item
router.get("/:id", async (req, res) => {
  const items = await Item.findByPk(req.params.id);
 res.json(items);

})
module.exports = router;
