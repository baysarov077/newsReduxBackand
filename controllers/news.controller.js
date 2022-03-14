const News = require("../models/News.model");

module.exports.newsController = {
  addNews: async (req, res) => {
    try {
      await News.create({
        title: req.body.title,
        text: req.body.text,
        category: req.body.category,
        comment: req.body.comment,
      });
      res.json("Новость добавлена");
    } catch (err) {
      console.log(err);
    }
  },
  deleteNews: async (req, res) => {
    try {
      await News.findByIdAndDelete(req.params.id);
      res.json("Новость удалена");
    } catch (err) {
      console.log(err);
    }
  },
  getNews: async (req, res) => {
    try {
      const getNews = await News.find().populate("Category");
      res.json(getNews);
    } catch (err) {
      console.log(err);
    }
  },
  getNewsById: async (req, res) => {
    try {
      const newsById = await News.findById(req.params.id);
      res.json(newsById);
    } catch (err) {
      console.log(err);
    }
  },
  getNewsByCategory: async (req, res) => {
    try {
      const newsByCategory = await News.find({ category: req.params.id });
      res.json(newsByCategory);
    } catch (err) {
      console.log(err);
    }
  },
};
