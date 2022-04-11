const Comment = require("../models/Comment.model");
const jwt = require('jsonwebtoken')

module.exports.commentsControllers = {
  addComment: async (req, res) => {
    const { text, user } = req.body
    const { news } = req.params
    try{
      const comment = await Comment.create({
        user,
        news: req.params.newsId,
        text
      })
      return res.json(comment)
    } catch(e) {
      console.log(e);
    }


    res.json(token)
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
