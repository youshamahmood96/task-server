//Express
const express = require('express')

//ENV
const env = require('dotenv')
env.config()

//BODY-PARSER
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

//MONGOOSE
const mongoose = require('mongoose')
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.x8sqy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>{
    console.log('Connected')
});

// ROUTES
const authRoutes =require('./routes/auth')

// API MIDDLEWARE
app.use('/api', authRoutes)

// SERVER CONNECTION
app.listen(process.env.PORT, () =>{
    console.log(`server listening on port ${process.env.PORT}`);
})