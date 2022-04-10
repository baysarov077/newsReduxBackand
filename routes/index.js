const { Router } = require("express");

const router = Router();

router.use(require("./cats.route"));
router.use(require("./comments.route"));
router.use(require("./news.route"));
router.use(require("./users.route"))

module.exports = router;
