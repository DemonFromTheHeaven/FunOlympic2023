
const { addNews, getAllNews, getNewsbyId, deleteNewsById } = require('./../Controller/newsController');
const router = require('express').Router();

router.post('/add', addNews).get('/get', getAllNews).get('/get/:id', getNewsbyId).delete('/:id', deleteNewsById);

module.exports = router;