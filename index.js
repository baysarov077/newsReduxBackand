const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(require("./routes/"));


mongoose
  .connect(
    "mongodb+srv://darrow:7058550mn@cluster0.mwd3u.mongodb.net/team-news?retryWrites=true&w=majority"
  )
  .then(() => console.log("Успешное соединение..."))
  .catch(() => console.log("Не удалось соединиться!"));

app.listen(4000, () => {
  console.log("Сервер запущен...");
});
