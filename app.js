const express = require('express')
const logger = require("morgan");
require('./models/db')
const app = express()
app.use(express.json())
PORT=process.env.PORT 

// show method and 
app.use(logger("dev"));

// user Routs middlewear
const user = require('./Routes/user_routs')
app.use("/user",user)

// tido Routs middlewear.
const routs = require('./Routes/todo_routs')
app.use("/todo",routs)


app.listen(PORT, () => {
    console.log(`server start at ${PORT}`);
})
