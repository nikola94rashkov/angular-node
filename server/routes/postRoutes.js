const express = require('express');
const {
    createPost,
    updatePost,
    deletePost,
    getPostById,
    getAllPosts,
    getPostsByUserId
} = require('../controllers/postController');
const { isAuthenticated } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', isAuthenticated, createPost);
router.put('/:id', isAuthenticated, updatePost);
router.delete('/:id', isAuthenticated, deletePost);

router.get('/:id', getPostById);
router.get('/', getAllPosts);

router.get('/user/:userId', getPostsByUserId);

module.exports = router;