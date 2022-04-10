const { Router } = require("express");
const { commentsControllers } = require("../controllers/comments.controller");
const authMiddleware = require('../models/middlewares/auth.middleware')

const router = Router();

router.get("/comments/:newsId", commentsControllers.getCommentsByNews);
router.post("/comments/:newsId", authMiddleware, commentsControllers.addComment);
router.delete("/comments/:id", authMiddleware, commentsControllers.delComment);

module.exports = router;
