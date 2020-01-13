const express = require("express");
const router = express.Router();

const productsComtroller = require("../controllers/products");

router.get("/add-product", productsComtroller.getAddProduct);

router.post("/add-product", productsComtroller.postAddProduct);

module.exports = router;
