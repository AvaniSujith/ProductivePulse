const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    position: {
        type: String,
        required: true
    },
    attendance: [
        {
            date: {
                type: Date,
                default: Date.now
            },
            status: {
                type: String,
                enum: ["Present", "Absent", "On Leave"],
                required: true
            }
        }
    ]
})


module.exports = mongoose.model("Employee", EmployeeSchema)