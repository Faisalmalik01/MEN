
const express = require('express'); // importing express module
const app = express(); // creating express application


const userModel = require('./models/user'); // importing user model 
const dbConnection = require('./config/db'); // importing database connection   



//built in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public")); // to serve static files like css, js, images


//template engine setup
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    res.render('form');
});

app.post('/get-form-data', (req, res) => {
    console.log(req.body);
    res.send('data recieved')
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});