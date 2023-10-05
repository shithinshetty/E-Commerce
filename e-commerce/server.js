import express from 'express'
const app=express()
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import morgan from 'morgan';
dotenv.config();

connectDb();
app.use(express.json())
app.use(morgan('dev'))

app.get('/',(req,res)=>
{
    res.send({
        message:"Welcome to E-commerce21"
    })
})
const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>
{
    console.log(`server running on ${PORT}`)
})
