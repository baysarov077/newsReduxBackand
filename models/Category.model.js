const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    category: String,
    
})

const Category = mongoose.module('Category', categorySchema)

module.exports = Category