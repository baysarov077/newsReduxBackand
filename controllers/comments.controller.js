const Comment = require("../models/Comment.model");

module.exports.commentsControllers = {
  addComment: async (req, res) => {
    try {
      await Comment.create({
        author: req.body.author,
        text: req.body.text,
        news: req.params.newsId,
      });
      res.json("Комментарий добавлен!");
    } catch (error) {
      res.json(error.message);
    }
  },
  delComment: async (req, res) => {
    try {
      await Comment.findByIdAndDelete(req.params.id);
      res.json("Комментарий удален!");
    } catch (error) {
      res.json(error.message);
    }
  },
  getCommentsByNews: async (req, res) => {
    try {
      const newsComs = await Comment.find({
        news: req.params.newsId,
      });
      res.json(newsComs);
    } catch (error) {
      res.json(error.message);
    }
  },
};
