const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendance.controller');

// Create new attendance record
router.post('/attendance', attendanceController.create);

// Get attendance by date
router.get('/attendance/:date', attendanceController.findByDate);

// Get all attendance records
router.get('/attendance', attendanceController.findAll);

// Update attendance
router.put('/attendance/:date', attendanceController.update);

// Delete attendance
router.delete('/attendance/:date', attendanceController.delete);

// Get attendance summary
router.get('/attendance-summary', attendanceController.getAttendanceSummary);

module.exports = router;