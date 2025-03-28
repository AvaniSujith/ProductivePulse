const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    category: {
        type : String, 
        enum: ["Coding", "Learning", "Meeting", "Break", "Browser"],
        required: true 
    },
    application: {
        type: String,
        // enum: ["VSCode", "YouTube", "Zoom", ""]
        required: true
    },
    startTime: {
        type: Date,
        required : true
    },
    endTime: {
        type: Date,
        required: true
    }, 
    duration: {
        type: Number,
        required: true
    }
},  
{timestamps: true}
);

module.exports = mongoose.model("Activity", activitySchema);