const router = require('express').Router();

const { getAllPosts, createPost, getPostsByAuthor } = require('../../controllers/posts.controller');

router.get('/posts', getAllPosts);
router.post('/posts', createPost);
router.get('/posts/:authorId', getPostsByAuthor);

module.exports = router;