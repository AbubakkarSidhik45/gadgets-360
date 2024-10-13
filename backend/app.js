const express = require("express");
const productRoutes = require("./routes/product");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://gadgets-360.onrender.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json());

app.use("/api/product", productRoutes);

const PORT = process.env.PORT;
const _dirname = path.resolve();
console.log("_dirname: ", _dirname);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "frontend", "dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
  });
}

app.listen("5000", () => {
  console.log("port is listening http://localhost:" + PORT);
});
