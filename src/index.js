const express = require("express");
const app = express();
const router = require("./routes");
const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/zomato_clone')
  .then((res) => console.log("==> Connectd to DB"))
  .catch((error) => console.log("==>Unable to connect DB"))
const PORT = 2000;

// app.get("/user/delete", (req, res) => {
//   res.status(200).send("Hello World!");
// });

app.use("/api", router);

app.listen(PORT, () => {
  console.log("===>> Server is connected");
});