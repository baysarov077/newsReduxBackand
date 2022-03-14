const { Router } = require("express");
const { commentsControllers } = require("../controllers/comments.controller");

const router = Router();

router.get("/comments/:newsId", commentsControllers.getCommentsByNews);
router.post("/comments/:newsId", commentsControllers.addComment);
router.delete("/comments/:id", commentsControllers.delComment);

module.exports = router;
