// name, email, password, picture 
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, requried: true},
    pic : {type: String, default: "https://avatars.githubusercontent.com/u/83135634?v=4"},
},
{
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.export = User;