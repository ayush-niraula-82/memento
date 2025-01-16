const Memento = require("../models/MementoModel");
const getAllMementos = async (req, res) => {
  try {
    const mementos = await Memento.find();
    res.status(200).json(mementos);
  } catch {
    res.status(500).json({
      message: "Failed to get mementos",
    });
  }
};

const addMementos = async (req, res) => {
  console.log(req.body);
  try {
    await Memento.create(req.body);
    res.status(200).json({
      message: "Successfully added memento",
    });
  } catch {
    res.status(500).json({
      message: "Failed to add memento",
    });
  }
};

const deleteMementoById = async (req, res) => {
  try {
    const { id } = req.params;

    await Memento.findByIdAndDelete(id);
    res.status(200).json({
      message: "Successfully deleted memento",
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to delete memento",
    });
  }
};

module.exports = {
  getAllMementos,
  addMementos,
  deleteMementoById,
};
