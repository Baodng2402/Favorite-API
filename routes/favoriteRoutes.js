const express = require('express');
const router = express.Router();
const favoirteProductController = require('../controller/favoirteProductController');

router.post("/:id", favoirteProductController.addFavorite);
router.get("/", favoirteProductController.getAllFavorite);
router.delete("/:id", favoirteProductController.removeOneFavorite);
router.delete("/",favoirteProductController.removeManyFavorite);


module.exports = router;