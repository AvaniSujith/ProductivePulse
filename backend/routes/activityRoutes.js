const express = require("express");
const router = express.Router();
const trackActivity = require("../middleware/activityTrackingMiddleware");

router.post("/track", trackActivity, (request, response) => {
    response.status(200).json({ message: "activity tracked successfully" });
});

module.exports = router; 