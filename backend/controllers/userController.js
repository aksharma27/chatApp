// express-async-handler -> package to handle errors in controller

const User = require('../models/userModel');
const asyncaHandler = require('express-async-handler')

const registereUser = asyncaHandler(async (req, res) => {
    const {name, email, password, pic} = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all the Fields");
    }

    const useExists = await User.findOne({email});

    if(useExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name, email, password, pic,
    });

    if(user){
        res.status(201).json({
            
        })
    }
})