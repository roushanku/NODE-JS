const express = require('express')

const Student = require("Student");
require("./DB/connection");

const app = express()

const port = process.env.PORT || 3000;

app.get("/" , (req , res) => {
    console.log("hello from other side by roush")
})
//create http method
app.post("/students" , (req , res) => {
    res.send("response from other side")
})

app.listen(port , () => {
    console.log(`connetion is setup at port no ${port}`);
})