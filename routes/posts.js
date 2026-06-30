const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', async(req,res)=>{
    try{
        if(!req.body.title || !req.body.content || !req.body.author || !req.body.category){
          return res.status(400).json({message:"All fields must be completed"});
        }
        const post = await Post.create(req.body);
        res.status(201).json(post);
    }catch(err){
        res.status(400).json({error:err.message});
    }
});

router.get('/', async(req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({error:err.message})
    }
})

router.get('/:id', async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post) return res.status(404).json({message:"Post Not Found"});
        res.json(post);
    }catch(err){
        res.json({error:err.message});
    }
})

router.put('/:id', async (req,res)=>{
    try{
        const post = await Post.findByIdAndUpdate(
            req.params.id,req.body,{new:true}
        );
        if(!post) return res.json({message:"Not Found"});
        res.json(post);
    } catch(err){
        res.json({error:err.message})
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        await Post.findByIdAndDelete(req.params.id);
        res.json({message:'Post deleted'});
    }catch(err){
        res.json({error:err.message});
    }
});

module.exports =router;