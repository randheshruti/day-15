// backend/routes/tasks.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth'); // ← import here

//         👇 middleware goes here, between path and handler
router.post('/',   authenticateToken, createTask);
router.put('/:id', authenticateToken, updateTask);
router.delete('/:id', authenticateToken, deleteTask);

// GET stays public (no middleware)
router.get('/', getTasks);

module.exports = router;