const apiRouter = require("./src/routes/api");
const express = require("express");
const database = require("./src/database");
const cors = require("cors");
const app = express();
const port = 8084;

database();

app.use(cors());
app.use(express.json());


//app.use("/api", apiRouter);

app.listen(port, () => console.log("App listening localhost:8084"));