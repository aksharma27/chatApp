const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
dotenv.config({path: "../.env"});
const connectDb = require('./config/db');

const userRoutes = require('./Routes/userRoutes');


const app = express();
connectDb();


app.get('/', (req, res)=>{
    res.send("Welcome to home");
});

// app.get('/api/chat', (req, res)=>{
//     res.set('Access-Control-Allow-Origin', '*');
//     res.send(chats);
// });

// app.get('/api/chat/:id', (req, res)=>{
//     const singleChat = chats.find((c)=>c._id === req.params.id);
//     res.send(singleChat);
// })



app.use('/api/user', userRoutes);


const PORT = process.env.PORT;
app.listen(PORT, console.log(`listening on ${PORT}`));