const express = require("express");
const router = express.Router();

const {
  getAllMementos,
  addMementos,
} = require("../controller/mementoController");

router.get("/api/all", getAllMementos);
router.post("/api/add", addMementos);

module.exports = router;
