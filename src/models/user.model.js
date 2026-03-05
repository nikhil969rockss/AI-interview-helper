const monogoose = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = new monogoose.Schema({
    username: {
        type: String,
        unique: [true, "username is already taken"],
        required: [true, "username is required"],
        trim: true,

    },
    email: {
        type: String,
        unique: [true, "Account is already exists with this email address"],
        required: [true, "email is required"],
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
});

//hashing password before saving
userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next()
})

//comparing password
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}


const UserModel = monogoose.model("User", userSchema);
