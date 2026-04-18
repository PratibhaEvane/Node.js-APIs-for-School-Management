<<<<<<< HEAD
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", schoolRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
=======
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", schoolRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
>>>>>>> e2b204578e629e19cfc39851e5ce964848844056
});