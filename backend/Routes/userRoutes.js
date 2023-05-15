const express = require('express')

const router = express.Router();
const {registereUser, authUser} = require('../controllers/userController');

// router.route('/').post(registereUser);
router.post('/', registereUser);
router.post('/login', authUser);

module.exports = router;