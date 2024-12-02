const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    timestamp: { type: Number, required: true },
  },
  { timestamps: true }
);

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;
