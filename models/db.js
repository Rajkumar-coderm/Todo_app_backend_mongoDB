const mongoose = require('mongoose')
require('dotenv').config()
const mongoAtlas=process.env.MONGOATLATS
mongoose.connect(mongoAtlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Databases connected successfully..');
})
mongoose.connection.on('error', () => {
    console.log('Databases is not connected..');
})

module.exports = mongoose;