const express = require('express')

const router = express.Router();
const {registereUser, authUser, allUsers} = require('../controllers/userController');

// router.route('/').post(registereUser);
router.route('/').post(registereUser).get(allUsers);
router.post('/login', authUser);


module.exports = router;