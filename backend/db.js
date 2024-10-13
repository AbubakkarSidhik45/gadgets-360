const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const url = process.env.MONGO_URL;
const dbName = "ecommerce";
let db;
async function connect() {
  if (db) return db;
  const client = new MongoClient(url);
  await client.connect();
  db = client.db(dbName);
  return db;
}

//awH2iR3PdmMB8rM0

module.exports = connect;
