const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const loginRoutes = require("./routes/login");
const User = require("./models/users");
mongoose.connect("mongodb://localhost:27017/restapidemo");
const secret = "GenerateToken"

const app = express();
app.use(bodyparser());

app.use("/", loginRoutes);

app.listen(3000, () => console.log("Server is started"));