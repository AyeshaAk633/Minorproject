const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title:String,
    content:String,
    author:String,
    category:String,
    CreatedAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Post', PostSchema);