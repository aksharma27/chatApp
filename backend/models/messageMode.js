// name(sender)/id, message(content), reference of the chat 
const mongoose = require('mongoose');

const messageModel = mongoose.Schema({
    sender: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    contend: {type: String, trim: true},
    message: {type: mongoose.Schema.Types.ObjectId, ref: "Chat"},
},
{
    timestapm : true,
}); 

const Message = mongoose.Model("Message", messageModel);

module.exports = Message;