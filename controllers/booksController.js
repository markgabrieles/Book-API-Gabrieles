const books = require("../models/booksModel");

const getAllbooks = (req, res) => {
    res.json(books);
};

const getbooksByGenre = (req, res) => {
    const genre = req.param.genre
    const filterdbooks = books.filter((books) => books.genre === genre);

    if (filterdbooks.length === 0) {
        res.status(404).json({massage: "Genre not found"});
    }
    res.json((filterdbooks));
}

module.exports = {
    getAllbooks,
    getbooksByGenre,
}