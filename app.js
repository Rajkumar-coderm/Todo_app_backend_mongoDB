const express = require('express')
const routs = require('./Routes/todo_routs')
const app = express()
app.use(express.json())
const user = require('./Routes/user_routs')
const Middelwear = (req, res, next) => {
    console.log(`Middelwear  ${req.url}  ${req.method} ${new Date()}`)
    next();
}
app.use(Middelwear)
app.use(user,routs)


app.listen(2021, () => {
    console.log("server start at 2021");
})
