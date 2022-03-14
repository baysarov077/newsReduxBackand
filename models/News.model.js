const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsSchema = Schema({
  title: String,
  text: String,
  category: {
    ref: "Category",
    type: Schema.Types.ObjectId,
  },
});
const News = mongoose.model("News", newsSchema);
module.exports = News;
