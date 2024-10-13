const express = require("express");
const router = express.Router();
const {
  getProduct,
  postProduct,
  patchProduct,
  deleteProduct,
} = require("../controller/products");

router.get("/", getProduct);

router.post("/", postProduct);

router.put("/:id", patchProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
