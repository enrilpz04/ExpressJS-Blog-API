const router = require('express').Router();

const { getAllAuthors, createAuthor } = require('../../controllers/authors.controller');

router.get('/authors', getAllAuthors);
router.post('/authors', createAuthor);

module.exports = router;