const BlogPost = require('../models/BlogPost');

// Create a new blog post
exports.createBlogPost = async (req, res) => {
  const { title, description, imageUrl, timestamp } = req.body;

  try {
    const newPost = new BlogPost({
      title,
      description,
      imageUrl,
      timestamp,
    });
    
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create blog post', error: err });
  }
};

// Get all blog posts
exports.getAllBlogPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ message: 'Failed to fetch blog posts', error: err });
  }
};

// Delete a blog post by ID
exports.deleteBlogPost = async (req, res) => {
  const { id } = req.params;
  
  try {
    await BlogPost.findByIdAndDelete(id);
    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete blog post', error: err });
  }
};
