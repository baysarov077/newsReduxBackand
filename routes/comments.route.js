const { Router } = require("express");
const { commentsControllers } = require("../controllers/comments.controller");

const router = Router();

router.post("/comments", commentsControllers.addComment);
router.delete("/comments/:id", commentsControllers.delComment);
router.get("/comments/:newsId", commentsControllers.getCommentsByNews);

module.exports = router;
