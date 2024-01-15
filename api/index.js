import express, { application } from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js'

mongoose.connect("mongodb://localhost:27017/Mern-Estate").then (() =>{
    console.log("conncted to database");
    }).catch((err) =>{
    console.error(err);
    });

const app = express();

app.listen(3000, ()=>{
    console.log('server is running on port 3000!');
    }
);

app.use("/api/user", userRouter);