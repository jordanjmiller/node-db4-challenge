const express = require('express');

const RecipeRouter = require('./recipes/recipe-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);


const PORT = process.env.PORT || 5050;
server.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });

module.exports = server;