const express = require ("express");
const app = express();
const mongoose = require ("mongoose")
const dotenv = require ("dotenv")
const cors = require('cors');
dotenv.config();
const userRouter = require("./router/user");
const PostRouter = require("./router/Post");

//the link used in the mongoose connect is the database link where i have used my id and password to connect my database to the server.
//this link can be specific as well. i.e. we can change it according to ourself with the help of username and password of mongodb atlas.

mongoose.connect("mongodb+srv://esha:esha20@cluster0.qs5ou4x.mongodb.net/?retryWrites=true&w=majority").then(()=>
    console.log("DB connection successful")).catch(()=>{
        console.log("Some Error Occurred")
    })
app.use(cors())
app.use(express.json())
app.use("/api/user", userRouter);
app.use("/api/post", PostRouter);
app.listen(5000, ()=>{
    console.log("Server is running");
})
