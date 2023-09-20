const express = require("express");
const mongoose = require("mongoose");
const memberRouter = require("./routers/member.js");

const app = express();
const url = 'mongodb+srv://dabaoku:dabaoku@cluster0.ijnpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(express.json());
app.use('/member', memberRouter);

mongoose.connect(url, {useNewUrlParser: true})
    .then(() => console.log('Database Connect Successfully!'))
    .catch((error) => console.log(error))

app.listen(9090, () =>{
    console.log("Server running on http://localhost:9090")
    app.put("Hello");
})
