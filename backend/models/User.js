const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    firstName:{
            type: String,
            required: false
        },
    lastName:{
           type: String,
           required: false
        },
    email:{ type: String,
            required:true,
            unique:true,
            match: /.+\@.+\..+/
        },
    password: { type: String, required: true},
    role: { type: String, 
        enum: ["admin", "employee"],
        required: true
    },
    refreshToken: { type: String},     
},
{timestamps: true});


UserSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

UserSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);