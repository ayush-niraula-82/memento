const express = require("express");
const router = express.Router();

const {
  getAllMementos,
  addMementos,
  deleteMementoById,
} = require("../controller/mementoController");

router.get("/api/all", getAllMementos);
router.post("/api/add", addMementos);
router.get("/api/delete/:id", deleteMementoById);

module.exports = router;
