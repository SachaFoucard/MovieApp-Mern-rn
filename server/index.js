const express = require('express');
const mongodb = require('./config/database');
const cors = require('cors');
const app = express();

app.use(express.json())

require("dotenv").config({
    path: './.env'
});

require("./config/database");

const PORT = process.env.PORT || 8000;

mongodb()
app.use(cors());
app.use('/api', require('./Routes/routes'))

try {
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
} catch (error) {
    console.log(error);
}