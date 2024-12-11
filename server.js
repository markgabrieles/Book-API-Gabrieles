const express = require ("express");
const booksRoutes = require ("./routes/booksRoutes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use("/",booksRoutes);

app.listen(PORT,() => {console.log(`Server is running on port ${PORT}`);});