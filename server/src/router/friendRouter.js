const express = require('express');
const router = express.Router();
const authenticateToken = require('../app/middleware/authenticateToken');
const friendController = require('../app/controller/friendController');

router.post('/add-friend', authenticateToken, friendController.addFriend);
router.post('/remove-friend', authenticateToken, friendController.removeFriend);

module.exports = router;