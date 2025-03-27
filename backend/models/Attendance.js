const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    date: {
        type: Date,
        required: true,
        // default: Date.now,
        default: function(){
            return new Date().setHours(0, 0, 0, 0);
        }
    },
    status:{
        type: String,
        enum: ['Present', 'Absent', 'Working', 'away'],
        default:'Present',
    },
    checkInTime: {
        type: Date,
        // required: function() { return this.status === 'Present'; },
        default: function() {
            return this.status === "Present" ? new Date() : null;
        }, 
    },
    checkOutTime: {
        type: Date,
        // required: function() { return this.status === "Present"; },  
        default: null, 
    }, 
},
{
    timestamps: true,
}); 

AttendanceSchema.index({ employee: 1, date: 1}, { unique: true });  

module.exports = mongoose.model("Attendance", AttendanceSchema);
