const { Schema, model } = require('mongoose');

const bardLog = new Schema({
    date: String,
    ai: String,
    prompt: String,
    response: String,
})

module.exports = model (`BardLog`, bardLog)