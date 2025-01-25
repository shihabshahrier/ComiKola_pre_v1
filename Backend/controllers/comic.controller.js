const { validationResult } = require('express-validator');
const comicService = require('../services/comic.service');
const userModel = require('../models/user.model');

module.exports.uploadComic = async (req, res, next) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Extract the data from the request body
        const { title, coverImage, description, comicImages, genre } = req.body;

        // Make sure the user is authenticated and get the user ID from the token (req.user)
        const authorId = req.user._id;

        // Create a new comic document in the database
        const comic = await comicService.createComic({ title, coverImage, authorId, genre, description, comicImages });
        
        await comic.save();

        //retrieve the user from the database
        const user = await userModel.findById(authorId);
        //increment the comic count of the user
        user.totalComics += 1;

        //save the user
        await user.save();

        // Respond with success message and the created comic data
        res.status(201).json({ message: "Comic uploaded successfully", comic });
    } catch (error) {
        // Handle any errors that occur during comic creation
        res.status(500).json({ message: error.message });
    }
};

module.exports.getAllComics = async (req, res, next) => {
    try {
        // Fetch all comics from the database
        const comics = await comicService.getAllComics();

        // Respond with the fetched comics
        res.status(200).json(comics);
    } catch (error) {
        // Handle any errors that occur during fetching comics
        res.status(500).json({ message: error.message });
    }
};