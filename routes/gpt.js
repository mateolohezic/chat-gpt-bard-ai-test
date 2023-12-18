const express = require('express');
const route = express.Router();
const { askGPT } = require('../controllers/gpt');
const { verifyUserToken } = require('../middleware/jwt')

route.post('/', askGPT)

module.exports = route;