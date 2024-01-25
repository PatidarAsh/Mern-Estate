import express, { application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser';


mongoose.connect("mongodb://localhost:27017/Mern-Estate").then (() =>{
    console.log("conncted to database");
    }).catch((err) =>{
    console.error(err);
    });

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, ()=>{
    console.log('server is running on port 3000!');
    }
);

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);


app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success : false,
        statusCode ,
        message,
    })
});