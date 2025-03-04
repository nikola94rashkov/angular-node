const Post = require('../models/Post');

const createPost = async (req, res) => {
    const { title, content, image } = req.body;
    const userId = req.session.userId;

    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const newPost = new Post({
            title,
            content,
            image,
            author: userId,
        });

        const savedPost = await newPost.save();

        res.status(201).json({ message: 'Post created successfully', post: savedPost });
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation error', error: err.message });
        }

        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content, image } = req.body;
    const userId = req.session.userId;

    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const post = await Post.findOne({ _id: id, author: userId });

        if (!post) {
            return res.status(404).json({ message: 'Post not found or unauthorized' });
        }

        post.title = title || post.title;
        post.content = content || post.content;
        post.image = image || post.image;

        const updatedPost = await post.save();
        res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    const userId = req.session.userId;

    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const post = await Post.findOneAndDelete({ _id: id, author: userId });

        if (!post) {
            return res.status(404).json({ message: 'Post not found or unauthorized' });
        }

        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

const getPostById = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id).populate('author', 'firstName lastName email');

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.status(200).json({ post });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

const getAllPosts = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    try {
        const skip = (page - 1) * limit;

        const posts = await Post.find()
            .populate('author', 'firstName lastName email')
            .skip(skip)
            .limit(parseInt(limit))
            .sort({ createdAt: -1 });

        const totalPosts = await Post.countDocuments();

        res.status(200).json({
            posts,
            totalPosts,
            totalPages: Math.ceil(totalPosts / limit),
            currentPage: parseInt(page),
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

const getPostsByUserId = async (req, res) => {
    const { userId } = req.params;
    const { page = 1, limit = 10 } = req.query;

    try {
        const skip = (page - 1) * limit;

        const posts = await Post.find({ author: userId })
            .populate('author', 'firstName lastName email')
            .skip(skip)
            .limit(parseInt(limit))
            .sort({ createdAt: -1 });

        const totalPosts = await Post.countDocuments({ author: userId });

        res.status(200).json({
            posts,
            totalPosts,
            totalPages: Math.ceil(totalPosts / limit),
            currentPage: parseInt(page),
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getPostById,
    getAllPosts,
    getPostsByUserId
};