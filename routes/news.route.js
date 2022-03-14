const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");

const router = Router();

router.post("/news", newsController.addNews)
router.delete("/news/:id", newsController.deleteNews)
router.get('/news', newsController.getNews)
router.get('/news/:id', newsController.getNewsById) //вывод определенной новости по АйДи
router.get('/news/category/:id', newsController.getNewsByCategory) //вывод всех новостей по категории
//лагман
module.exports = router;
