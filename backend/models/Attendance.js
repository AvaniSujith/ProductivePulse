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
        enum: ['Checked-In', 'Checked-Out', 'Absent', 'On Break'],
        default:'Absent',
    },
    // checkInTime: {
    //     type: Date,
    //     // required: function() { return this.status === 'Present'; },
    //     // default: function() {
    //     //     return this.status === "Present" ? new Date() : null;
    //     // }, 
    //     // default: null,
    // },
    // checkOutTime: {
    //     type: Date,
    //     // required: function() { return this.status === "Present"; },  
    //     default: null, 
    //     validate: {
    //         validator: function (value){
    //             // return !this.checkInTime || value >= this.checkInTime;
    //             return !value || value >= this.checkInTime;
    //         },
    //         message: "Check-out time must be after check-in time",
    //     },
    // }, 

    sessions: [
        {
            checkInTime: { type: Date, required: true },
            checkOutTime: {
                type: Date,
                default: null,
                validate: {
                    validator: function (value){
                        return !value || value >= this.checkInTime;
                    },
                    message: "Check out time must be after check in time"
                }
            }
        }
    ],
    breaks: [
        {
            type: {
                type: String,
                enum: ['Lunch', 'Dinner', 'Tea', 'Short Break'],
            },
            startTime: Date,
            endTime: Date,
        }
    ]
},
{
    timestamps: true,
}); 

AttendanceSchema.index({ employee: 1, date: 1}, { unique: true });  

module.exports = mongoose.model("Attendance", AttendanceSchema);