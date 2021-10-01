const express = require('express')
require('./models/db')
const app = express()
app.use(express.json())
PORT=process.env.PORT 


const Middelwear = (req, res, next) => {
    console.log(`URL:-${req.url}   Method:-${req.method}`)
    next();
}

// show url or method.
app.use(Middelwear)

// user Routs middlewear
const user = require('./Routes/user_routs')
app.use("/user",user)

// tido Routs middlewear.
const routs = require('./Routes/todo_routs')
app.use("/todo",routs)


app.listen(PORT, () => {
    console.log(`server start at ${PORT}`);
})
