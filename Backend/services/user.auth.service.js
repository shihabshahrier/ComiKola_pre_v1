const userModel = require('../models/user.model');

module.exports.createUser = async ({ username, firstname, lastname, email, password }) => {
    try {
        const user = await userModel.create({ username, email, password, fullname: { firstname, lastname } });
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}