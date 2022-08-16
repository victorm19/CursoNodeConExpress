require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require('./config/mongo');

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static('storage'))

const port = process.env.PORT || 3000;

/** 
* Aqui invocamos las rutas
**/
app.use("/api", require('./routes/index'))

app.listen(port, () => {
    console.log(`Tu app esta lista por http://localhost:${port}`)
});

dbConnect();