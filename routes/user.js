const express = require("express");
const userController = require('../controllers/user')
const router = express.Router();

router.get("/", userController.getIndex);

router.get("/dbFetchAll", userController.getDB);

router.post("/searchResult", userController.postSearchResult);



module.exports = router;
 