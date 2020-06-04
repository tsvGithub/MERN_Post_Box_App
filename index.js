require("./db");
const express = require("express");
const cors = require("cors");

let postMessageRoutes = require("./controllers/postMessageController");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

const PORT = 4000;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));

app.use("/postMessages", postMessageRoutes);
