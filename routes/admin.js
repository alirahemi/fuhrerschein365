const express = require("express");
const adminController = require('../controllers/admin');
const router = express.Router();

router.get("/adminPanel", adminController.getAdminPanel);

// router.get("/admin/products", adminController.getProducts);

// router.post("/add-product", adminController.postADDProduct);

exports.routes = router;
