const express = require('express');
const skylineRoutes = require('./skyline');
const authRoutes = require('./auth');
const grizzlyRoutes = require('./grizzly');
const apiKeysRoutes = require('./apiKeys');
const smsRoutes = require('./sms');

const router = express.Router();

// Definir rutas agrupadas
router.use('/skyline', skylineRoutes);
router.use('/auth', authRoutes);
router.use('/grizzly', grizzlyRoutes);
router.use('/api-keys', apiKeysRoutes);
router.use('/services-sms', smsRoutes);

module.exports = router;
