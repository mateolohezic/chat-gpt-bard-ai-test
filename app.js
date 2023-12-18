const express = require('express')
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');
app.use(express.json());
require('./database/db');

app.use(cors());

const gpt = require('./routes/gpt');

app.use('/api/gpt', gpt)

app.listen(port, () =>  {
    console.log(`Working on port ${port}`);
});