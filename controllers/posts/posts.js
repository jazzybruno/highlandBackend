const express = require('express');
const {Post} = require('../../models/post');
const Joi = require('joi');
const fs = require('fs');
const  cloudinary  =  require('../../middlewares/cludinary');

const NewPost = async (req , res)=>{

    const uploader = async (path) => await cloudinary.uploads(path , 'images');

    console.log(req.file);

    let url
    const file = req.file;
    const {path} = file;
    const newPath = await uploader(path);
    url = newPath;

   


    
    const postData = {
        title: req.body.title,
        content: req.body.content,
        photo: url.url
    }

    
    const {error} = validatePost(postData);
    if(error){
        return res.status(400).json({
            message: error.details[0].message
        })
    }

    const post = new Post(postData);
    try {
        await post.save();
        res.status(200).json({
            message: 'Post saved successfully'
        });
    } catch (error) {
        if(error){
            res.status(500).json({ 
                message: 'Error while creating post',
                error: error.message
            })
        }
    }

}

const GetPosts = async (req , res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message: 'Error while fetching posts',
            error: error.message
        })
    }
}

const DeletePost = async (req , res) =>{
    try {
        const toRemove = await Post.findById(req.params.id);
        const destination =  toRemove.photo.path
        fs.unlink(destination , (err) => {
            if(err){
                console.log(err);
            }
            else{
                console.log('File deleted successfully');
            }
        })
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Post deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error while deleting post',
            error: error.message
        })
    }
}

const UpdatePost = async (req , res) =>{
    const postData = {
        title: req.body.title,
        content: req.body.content,
        photo: req.file
    }

    const {error} = validatePost(postData);
    if(error){
        return res.status(400).json({
            message: error.details[0].message
        })
    }

    try {
        const toRemove = await Post.findById(req.params.id);
        const destination =  toRemove.photo.path
        fs.unlink(destination , (err) => {
            if(err){
                console.log(err);
            }
            else{
                console.log('File deleted successfully');
            }
        })
        
        const post = await Post.findByIdAndUpdate(req.params.id , postData);
        res.status(200).json({
            message: 'Post updated successfully'
        });
    } catch (error) {
        if(error){
            res.status(500).json({ 
                message: 'Error while updating post',
                error: error.message
            })
        }
    }
}

const GetPostById = async (req , res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({
            message: 'Error while fetching post',
            error: error.message
        })
    }
}

const validatePost = (post) => {
    const Shema = Joi.object({
        title: Joi.string().min(3).required(),
        content: Joi.string().min(3).required(),
        photo: Joi.required()
     } )
    return Shema.validate(post);
}

module.exports.NewPost = NewPost;
module.exports.GetPosts = GetPosts;
module.exports.DeletePost = DeletePost;
module.exports.UpdatePost = UpdatePost;
module.exports.GetPostById = GetPostById;

