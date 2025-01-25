const comicModel = require('../models/comic.model');

module.exports.createComic = async ({ title, coverImage, authorId, genre, description, comicImages }) => {
    try {
        const comic = await comicModel.create({ title, coverImage, authorId, genre, description, comicImages });
        return comic;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports.getAllComics = async () => {
    try {
        const comics = await comicModel.find();
        return comics;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports.getComicById = async (comicId) => {
    try {
        const comic = await comicModel.findOne({ comicId });
        return comic;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

module.exports.deleteComic = async (comicId) => {
    try {
        await comicModel.findOneAndDelete({ comicId });
    }
    catch (error) {
        throw new Error(error.message);
    }
}
