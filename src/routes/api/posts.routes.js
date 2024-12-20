const router = require('express').Router();

const { getAllPosts, createPost, getPostsByAuthor } = require('../../controllers/posts.controller');

router.get('/', getAllPosts);
router.post('/', createPost);
router.get('/author/:authorId', getPostsByAuthor);

module.exports = router;