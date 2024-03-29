const express = require('express');
const PostRouter = express.Router();
const {NewPost } = require('../controllers/posts/posts');
const {GetPosts} = require('../controllers/posts/posts');
const {DeletePost} = require('../controllers/posts/posts');
const {GetPostById} = require('../controllers/posts/posts');
const {UpdatePost} = require('../controllers/posts/posts');
const upload = require('../middlewares/multer');
const auth = require('../middlewares/auth');
const cloudinary = require('cloudinary');

PostRouter.post('/' , auth , upload.single('image') , NewPost);
PostRouter.get('/' , GetPosts);
PostRouter.delete('/:id', auth , DeletePost);
PostRouter.get('/:id' , auth , GetPostById);
PostRouter.put('/:id', auth ,  upload.single('image') ,  UpdatePost);


module.exports = PostRouter;