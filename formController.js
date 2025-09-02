const express = require('express');
const app = express();

//built in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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