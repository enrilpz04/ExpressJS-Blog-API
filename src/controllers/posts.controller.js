const { Post, Author } = require('../models');
const { Op } = require('sequelize');

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [
                {
                    model: Author,
                    attributes: ['name', 'email', 'image']
                }
            ]
        });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getPostByAuthor = async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [
                {
                    model: Author,
                    where: {
                        id: req.params.authorId
                    },
                    attributes: ['name', 'email', 'image']
                }
            ]
        });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllPosts,
    createPost,
    getPostByAuthor
};

