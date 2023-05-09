const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
dotenv.config();


const app = express();



app.get('/', (req, res)=>{
    res.send("Welcome to home");
});

app.get('/api/chat', (req, res)=>{
    res.send(chats);
});

app.get('/api/chat/:id', (req, res)=>{
    const singleChat = chats.find((c)=>c._id === req.params.id);
    res.send(singleChat);
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`listening on ${PORT}`));