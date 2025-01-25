const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/register', [
    body('username').isLength({min: 3}).withMessage('Username must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body("fullname.firstname").isLength({min: 3}).withMessage('Firstname must be at least 3 characters long'),
    body("fullname.lastname").isLength({min: 3}).withMessage('Lastname must be at least 3 characters long'),
    body("password").isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
], authController.register);

router.post('/login', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body("password").isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
], authController.login);

router.get("/profile", authMiddleware.authUser, authController.getUserProfile);
router.get("/logout", authMiddleware.authUser, authController.logout);

module.exports = router;