const mongoose = require('mongoose'); // import mongoose
const connection = mongoose.connect('mongodb://127.0.0.1:27017/men').then(()=>{
    console.log('connected to mongoDB database');
}); // connecting to mongoDB database named

module.exports = connection; // exporting the connection