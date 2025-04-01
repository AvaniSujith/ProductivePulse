const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const AdminSchema = new mongoose.Schema({
    username:{
        type: String, 
        required: true,
        unique: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => "Not a valid email"
        }
    },
    password:{
        type: String,
        required: true,
        minlength: [8, 'Password must be atleast 8charcters long'],
        validate: {
            validator: function(v) {
                return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(v);
            },
            message: props => "past must be atleast 8 character long, with atleast 1 number and 1 capital letter"
        }
    },
    role: {
        type: String,
        enum: ['Admin', 'superadmin'],
        default: 'Admin',
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    lastLogin: {
        type: Date
    },
    resetPasswordToken: {
        type: String,
        default: null,
    },
    resetPasswordExpires: {
        type: Date,
        default: null
    }
},
{
    timestamps: true,
});


// AdminSchema.pre('save', async function(next){
//     if(!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// })

module.exports = mongoose.model("Admin", AdminSchema); 
