const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({include: Product});
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try{
  } catch (err) {}
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  try{} catch (err) {}
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try{} catch (err) {}
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try{} catch (err) {}
});

module.exports = router;
