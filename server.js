const sequelize = require("./src/database/connection")
const apiRouter = require("./src/routes/api");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8084;

app.use(cors());
app.use(express.json());
sequelize.sync({ force: true })

app.use("/api", apiRouter);

app.listen(port, () => console.log("App listening localhost:8084"));