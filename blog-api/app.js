require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');
const postRoutes = require('./routes/posts');

const app = express ();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB connected"))
.catch(err=> console.log(err));

app.use('/posts',postRoutes);

app.listen(3000,()=>{
    console.log('server running on port 3000 http://localhost:3000')
});