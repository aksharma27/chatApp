// chatname,  groupchat, users, latest MessageChannel, groupadmin
const mongoose = require('mongoose');

const chatModel = mongoose.Schema(
    {
        chatName: {type: String, trim: true }, 
        isGroupChat: {type: Boolean, default: false },
        users: [{
            type: mongoose.Schema.TypesObjectId,
            ref: "User",
        },
    ],
    latestMessage: {
        type: mongoose.Schema.TypesObjectId,
        ref: "Message"
    },
    groupAdmin : {
        type: mongoose.Schema.TypesObjectId,
        ref: "User"
    }
    }, 
    {
        timestamps: true 
    }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;