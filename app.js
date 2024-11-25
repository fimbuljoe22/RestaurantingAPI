require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

mongoose.set('strictQuery', true);

const connString = process.env.DATABASE_URL
mongoose.connect(connString)
const database = mongoose.connection

database.on('error', (error)=>{
    console.log(error);    
})

database.once('connected', ()=>{
    console.log('Database Connected!');
})

const app = express()

app.get('/',(req, res)=>{
    res.json('Welcome!')
})

app.use('/api', routes)

app.listen(8000, ()=>{
    console.log('Server Started...');
    console.log(connString);  
})