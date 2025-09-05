//schema for user data in mongoDB database  

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({ 
    name: String,
    email: String,
    password: String,
    age: Number,
    gender:{
        type: String,
        enum: ['male', 'female']
    }
});


// Creating model from schema and exporting it
const userModel = mongoose.model('User', userSchema); 
module.exports = userModel;

// module.exports = mongoose.model('User', userSchema);
