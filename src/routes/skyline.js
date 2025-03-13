const express = require('express');
const skylineController = require('../controllers/skylineController');

const router = express.Router();

router.get('/dev-status', skylineController.getStatus);
router.post('/dev-status', skylineController.store);
router.get('/messages', skylineController.getMessages);

module.exports = router;
