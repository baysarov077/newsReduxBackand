const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  author: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
  text: String,
  news: {
    ref: "News",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
