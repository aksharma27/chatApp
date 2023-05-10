const express = require('express')

const router = express.Router();


router.route('/').post(registereUser);
router.post('/login', authUser);

module.exports = router;