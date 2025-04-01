const mongoose = require("mongoose");
const { requireAdmin } = require("../middleware/authMiddleware");

const leaveSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    category:{
        type:String,
        enum: ["Sick Leave", "Casual Leave", "Annual Leave", "Other"],
        required: true
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    reason: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending"
    }
}, { timestamps: true });

const Leave = mongoose.model("Leave", leaveSchema);
module.exports = Leave;