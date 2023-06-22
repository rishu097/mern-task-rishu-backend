const express = require("express");
const connectDB = require('./config/connectDB');
const dotenv = require("dotenv").config(); 
const mongoose = require("mongoose");
const Task = require("./model/taskModel");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors({
    origin: ["http://localhost:3000","https://mern-task-rishu-app.onrender.com"]
}))
app.use("/api/tasks",taskRoutes);







const PORT = process.env.PORT || 5000;
const startServer = async() => {
    try{
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server Connected on port ${PORT}`);
        });
    } catch(err) {
        console.log(err);
    }
}
startServer();

