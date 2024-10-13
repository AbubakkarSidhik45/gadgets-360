const connectToDataBase = require("../db");
const { ObjectId } = require("mongodb");

const getProduct = async (req, res) => {
  try {
    const db = await connectToDataBase();
    const response = await db.collection("products").find().toArray();
    res.status(200).json({ data: response });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ status: "failure", response: "server error" });
  }
};

const postProduct = async (req, res) => {
  const body = req.body;
  try {
    const db = await connectToDataBase();
    const result = await db.collection("products").insertOne(body);
    res.status(201).json(result);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ status: "failure", response: "server error" });
  }
};

const patchProduct = async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(400).send("Invalid ID format");
  }
  try {
    const db = await connectToDataBase();
    const result = await db
      .collection("products")
      .updateOne({ _id: new ObjectId(id) }, { $set: body });
    res.status(201).json(result);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ status: "failure", response: "server error" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(400).send("Invalid ID format");
  }
  try {
    const db = await connectToDataBase();
    const result = await db
      .collection("products")
      .deleteOne({ _id: new ObjectId(id) });
    res.status(201).json(result);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ status: "failure", response: "server error" });
  }
};

module.exports = { getProduct, postProduct, patchProduct, deleteProduct };
