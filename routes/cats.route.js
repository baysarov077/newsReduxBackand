const { Router } = require("express");

const { catsController } = require("../controllers/cats.controller");

const router = Router();

router.post("/cats/add", catsController.addCats);
router.patch("/cats/upd", catsController.patchCats);
router.delete("/cats/del/:id", catsController.deleteCats);
router.get("/cats/get", catsController.getCats);

module.exports = router;
