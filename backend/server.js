const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
dotenv.config({path: "../.env"});
// dotenv.config();
const connectDb = require('./config/db');

const userRoutes = require('./Routes/userRoutes');
const {notFound, errorHandler}  = require('./middleware/errorMiddleware');


const app = express();
connectDb();


app.use(express.json()); // to accept JSON data


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

// ERROR HANDELLIG -> if some routes does not exists

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT  || 5000;
app.listen(PORT, console.log(`listening on ${PORT}`));