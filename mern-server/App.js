require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
require("./db/connection")
const users = require("./model/userSchema");
const router = require("./routes/router")

const port = 8003;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log("connected");
});