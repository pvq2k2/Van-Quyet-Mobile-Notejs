import express from 'express';
import productRouter from '../src/router/product';
import categoryRouter from '../src/router/category';
import userRouter from '../src/router/auth';
import sliderRouter from '../src/router/slider';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();


// const express = require('express');
// const productRouter = require('./src/router/product');

//middleware
app.use(express.json());
app.use(cors());

// Routing
app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.use('/api', productRouter);
app.use('/api', categoryRouter);
app.use('/api', userRouter);
app.use('/api', sliderRouter);

// connect database
mongoose.connect("mongodb://localhost:27017/nodejs")
    .then(() => console.log("Connect db thanh cong"))
// Content
const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server running port ${PORT}`);
})


    // const http = require('http');
    // const server = http.createServer((req, res) => {
        // console.log("Chạy server thành công !");
        // console.log(req, res);
        // console.log("url", req.url);
        // const url = req.url;
        // if (url === "/") {
            // console.log("Product");
            // res.setHeader("Content-Type", "text/html");
            // res.write("<html>");
            // res.write("<body>");
            //     res.write("<h1>Hello World</h1>");
            //     res.write("<form method='post' id='add' action=''><input type='text' placeholder='User name'><br><button type=submit>Create</button></form>")
            // res.write("</body>");
            // res.write("</html>");
            // res.end();
            // const formAdd = document.getElementById('add');
            // formAdd.addEventListener ('submit', () => {
            //     url = url + '/create-user';
            // })
        // } else if (url === "/users") {
            // console.log("Home");
    //         res.setHeader("Content-Type", "text/html");
    //         res.write("<html>");
    //         res.write("<body>");
    //             res.write("<ul><li>User 1 </li></ul>");
    //         res.write("</body>");
    //         res.write("</html>");
    //         res.end();
    //     }
    // });