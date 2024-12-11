const express = require ("express");
const router = express.Router();

const{
    getAllbooks,
    getbooksByGenre
} = require("../controllers/booksController");

router.get("/", getAllbooks);
router.get("/;", getbooksByGenre);

module.exports = router;
