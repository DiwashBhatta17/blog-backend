const express = require('express');
const { createBlogPost, getAllBlogPosts, deleteBlogPost } = require('../controllers/blogController');
const router = express.Router();

router.post('/posts', createBlogPost);       // Create a new post
router.get('/posts', getAllBlogPosts);       // Get all posts
router.delete('/posts/:id', deleteBlogPost); // Delete a post by ID

module.exports = router;
