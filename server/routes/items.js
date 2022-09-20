const express = require("express");
const router = express.Router();
const { Item } = require("../models");


router.use(express.json());
router.use(express.urlencoded({extended: true}))

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

// Create a single item to the inventory by id
router.post("/", async (req, res, next) => {
  try {
    const item = await Item.create(req.body);
    res.send(item);
  } catch (error) {
    next(error);
  }
})



// Update a single item to the inventory by id
router.put("/:id", async (req, res, next) => {
//   try {
//     const item  = await Item.findByPk(req.body.status);
//     await item.update ({
//       id: req.body.id
//     });
//     res.send(item);
// } catch (error) {
//   next(error);
  
try {
  const item = await Item.update      
  ({where: {id: req.params.id} })
  res.send(item);
} catch (error) {
  next(error);
}
})
// router.put("/:id", async (req, res, next) => {
//   try {
//     const item  = await Item.update(
//       {status: req.body.status},
//       {where : {id : req.params.id},
//       return: true
//     });
//     res.send(item);
//   } catch (error) {
//     next(error);
//   } 
// })


// Delete a single item to the inventory by id
router.delete("/:id", async (req, res, next) => {
  try {
    await Item.destroy({
      where : {id : req.params.id}
    });
    const item = await Item.findAll()
    res.send(item);
  } catch (error) {
    next(error);
  } 
})

module.exports = router;
