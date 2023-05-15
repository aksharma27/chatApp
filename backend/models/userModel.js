// name, email, password, picture 
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, requried: true},
    pic : {type: String, default: "https://avatars.githubusercontent.com/u/83135634?v=4"},
},
{
    timestamps: true
});

userSchema.methods.matchPassword=async function(enteredPssword) {
    return await bcrypt.compare(enteredPssword, this.password)
}

//.pre => before saving apply this funciton
userSchema.pre('save', async function (next) {
    if(!this.isModified ) {
        next();
    }

    //before saving the user, encrypt the password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

// const User = mongoose.model("user", userSchema);

module.exports = User = mongoose.model('user', userSchema);