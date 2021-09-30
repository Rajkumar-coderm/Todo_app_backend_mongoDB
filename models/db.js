const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Rajkumar:3MbYKbH6cSCi1kdw@cluster0.gpihx.mongodb.net/tododb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('connected');
})
mongoose.connection.on('error', () => {
    console.log('not connected..');
})

module.exports = mongoose;