const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const EmployeeSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        validate: {
            validator: function(v){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => "Not a valid email"
        }
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Password must be atleast 8 character long"],
        validate:{
            validator: function(v){
                return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(v);
            },
            message: props => 'Password must be atleast 8 character long, with atleast one capital letter and one number digit'
        }
    },
    role:{
        type: String,
        enum : ['Employee'],
        default: 'Employee'
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'suspended'],
        default:'active',
    },
    resetPasswordToken: {
        type: String,
        default: null,
    },
    resetPasswordExpires: {
        type: Date,
        default: null
    },
    dateOfJoining: {
        type: Date,
        default: Date.now,
    },
    // attendance: [
    //     {
    //         date: {
    //             type: Date,
    //             default: Date.now
    //         },
    //         status: {
    //             type: String,
    //             enum: ["Present", "Absent", "On Leave"],
    //             required: true
    //         }
    //     }
    // ]

    attendance: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attendance',
    }],
},{
    timestamps: true,
});

EmployeeSchema.pre('save', async function(next) {

    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
    
})


module.exports = mongoose.model("Employee", EmployeeSchema)