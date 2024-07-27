const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name : String,
    status : String,
});

const category = mongoose.model('category', categorySchema);

module.exports = category;
