const userModel = require('../models/user.model');

module.exports.comicAuthor = async (req, res, next) => {
    try{
        const comic = await comicModel.findById(req.params.comicId);
        user = await userModel.findById(comic.authorId);
        if(user && user._id.toString() === req.user._id.toString()){
            next();
        }
        else{
            res.status(401).json({message: "You are not authorized to perform this action"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}