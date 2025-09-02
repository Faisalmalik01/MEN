const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev')) // using morgan middleware for logging 

app.set('view engine', 'ejs'); // set the view engine to ejs


// middleware - custom middleware
app.use((req, res, next) => {
    console.log("This is middleware");
    // res.send("Response from middleware");

    const a = 2
    const b = 3
    console.log(a + b);


    return next();
})

// routes 
app.get('/', (req, res) => {
    res.render('index'); // render index.ejs
});

app.get('/login', (req, res) => {
    res.send('This is the login page');
});

app.get('/profile', (req, res) => {
    res.send('This is the profile page');
});

app.get('/about', (req, res, next)=> {
    console.log("This is about page middleware");
    next();
}, (req, res) => {
    res.render('about'); // render about.ejs
});

app.get('/section', (req, res) => {
    res.render('section', { name: 'Muhammad Usama' }); // render section.ejs with data   
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
