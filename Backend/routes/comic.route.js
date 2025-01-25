const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const comicController = require('../controllers/comic.controller');
const authMiddleware = require('../middleware/auth.middleware');
const comicAuthorMiddleware = require('../middleware/author.middleware');

router.post('/upload', [
    body('title').isLength({min: 3}).withMessage('Title must be at least 3 characters long'),
    body('coverImage').isURL().withMessage('Cover image must be a valid URL'),
    body('description').isLength({min: 10}).withMessage('Description must be at least 10 characters long'),
    body('comicImages').isArray().withMessage('Comic images must be an array of URLs'),
    body('genre').isLength({min: 3}).withMessage('Genre must be at least 3 characters long'),
], authMiddleware.authUser, comicController.uploadComic);

router.get('/all', comicController.getAllComics);
router.get('/:comicId', comicController.getComicById);

module.exports = router;