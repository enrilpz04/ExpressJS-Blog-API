const { Author } = require('../models');
const { Op } = require('sequelize');

const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll();
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json(author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllAuthors,
    createAuthor
};