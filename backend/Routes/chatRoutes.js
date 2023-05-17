const express = require('express');

const router = express.Router();


//only logged in users can access this route
router.route('/').post(protect, accessChat);
// router.route('/').get(protect, fetchChats);
// router.route('/group').post(protect, createGroupChat);
// router.route('/rename').put(protect, renameGroup);
// router.route('/groupremove').put(protect, removeFromGroup);
// router.route('/groupadd').put(protect, addToGrouip);

module.exports = router;