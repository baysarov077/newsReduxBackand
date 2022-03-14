const Category = require('../models/Category.model')

module.exports.catsController = {
    addCats: async (req, res)=>{
        try {
            await Category.create({
                category: req.body.category
            })
            res.json('added')
        } catch (error) {
            console.log(error);
        }
    },
    patchCats: async (req,res) => {
        try {
            await Category.findByIdUpdate(req.params.id, {
                category: req.body.category
            })
            res.json('update')
        } catch (err) {
            console.log(err);
        }
    },
    deleteCats: async (req, res) => {
        try {
            await Category.findByIdDelete(req.params.id)
            res.json('delete')
        } catch (err) {
            console.log(err);
        }
    },
    getCats: async (req, res) => {
        try {
            const getCatss = await Category.find()
            res.json(getCatss)
        } catch (err) {
            console.log(err);
        }
    }
 }