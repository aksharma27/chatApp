const express = require('express')
const protect = require('../middleware/authMiddleware');

const router = express.Router();
const {registereUser, authUser, allUsers} = require('../controllers/userController');

// router.route('/').post(registereUser);
router.route('/').post(registereUser).get(protect, allUsers);
router.post('/login', authUser);


module.exports = router;