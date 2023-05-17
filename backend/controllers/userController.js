// express-async-handler -> package to handle errors in controller
const mongoose = require('mongoose');
const generateToken = require('../config/generateToken');
const User = require('../models/userModel');
// import User from '../models/userModel';
const asyncHandler = require('express-async-handler');
const { useRadio } = require('@chakra-ui/react');
const userModel = require('../models/userModel');

const registereUser = (async (req, res) => {
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

    //if user does not exists, create it:
    const user = await User.create({
        name, email, password, pic,
    });

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token : generateToken(user._id),

        });
    } else {
        res.status(400);
            throw new Error("Failed to create the user");
        
    }
});

const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            naem: user.name,
            email: user.email,
            pic:user.pic,
            token:generateToken(user._id)
        })
        console.log(req.headers);
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});


// endpoiint => api/user?search=abhishek
const allUsers = asyncHandler(async (req, res) => {
    // if want to filter using _id : we take req.params._id. But when using query, we take req.query.query_name, here search
    const keyword = req.query.search
     ? {
        $or : [
            {name : {$regex : req.query.search, $options: "i"}},        // i -> for case insensitive
            {email : {$regex : req.query.search, $options: "i"}}
        ]
    } : {};

    //find all the users in keyword except the user logged in
    const users = await User.find(keyword).find({_id:{$ne:req.user._id}});  //id = all except current user(ne = not equals)
    res.send(users);
    // console.log(keyword)
});

module.exports = {registereUser, authUser, allUsers};