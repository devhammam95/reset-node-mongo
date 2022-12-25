const categoryModel = require('../models/category')
const slugify = require('slugify')
const asyncHandler = require('express-async-handler')
const e = require('express')
const createCategory = asyncHandler(async(req, res) => {
        const category = await categoryModel.create({ name: req.body.name, slug: slugify(req.body.slug ?? req.body.name)})
        res.status(201).send(category)
    })

const getAll = asyncHandler(async(req, res) => { 
    var page = req.query.page || 1
    var limit = req.query.limit || 5
    var skip = (page-1) * limit
    const data = await categoryModel.find().skip(skip).limit(limit)
    res.send(data)
})

const getCategory = asyncHandler(async(req, res) => {
    const category = await categoryModel.findById(req.params.id)
    if(category) {
        res.send(category)
    } else {
        res.status(404).send("no cateogry")
    }
})

const updateCategory = asyncHandler(async(req, res) => {
    const category = await categoryModel.findOneAndUpdate(
        {_id: req.params.id},
        {name: req.body.name, slug: slugify(req.body.slug ?? req.body.name)},
        {new: true})
    res.send(category)
})

const deleteCategory = asyncHandler(async(req, res) => {
    const category = await categoryModel.findByIdAndDelete(req.params.id)
    res.send({'message': 'deleted'})
})

module.exports.getAll = getAll
module.exports.createCategory = createCategory
module.exports.getCategory = getCategory
module.exports.updateCategory = updateCategory
module.exports.deleteCategory = deleteCategory