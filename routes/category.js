const express = require('express')
const {getAll, createCategory, getCategory, updateCategory, deleteCategory} = require('../services/category')
const router = express.Router();
const {createCategoryValidator, getCategoryValidator} = require('../validators/categoryValidator')
router.get('/', getAll)
router.post('/', createCategoryValidator, createCategory)
router.get('/:id', getCategory)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategory)

module.exports = router