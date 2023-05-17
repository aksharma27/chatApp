const asyncHandler = require("express-async-handler");
const Chat = require('../models/chatModel');

const accessChat = asyncHandler(async (req, res) => {
    const {userId} = req.body;

    if(!userId) {
        console.log("user id param not sent with request");
        return res.sendStatus(400);
    }

    var isChat = await Chat.find({
        isGroupChat : false, 
        $and : [
            {users : {$elemMatch: {$eq: req.user._id}}}, 
            {users: {$elemMatch: {$eq: userId }}},
        ], 
        //if the chat is found, populate the users array
    }).populate('users', '-password').populate('latestMessage');
});