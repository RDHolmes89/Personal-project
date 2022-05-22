const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;
const path = require('path');
// const methodOverride = require('method-override');
// const routes = require('')


//set up ejs files to be viewed
app.set('view engine', 'ejs');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES
//app.use() will replaces the app.get()
app.get('/', (req, res) => {
    res.render('pages/index');
});
app.get('/create', (req, res) => {
    res.render('pages/create');
});
app.get('/login', (req, res) => {
    res.render('pages/login');
});
app.get('/profile', (req, res) => {
    res.render('pages/profile');
});
app.get('/maps', (req, res) => {
    res.render('pages/maps');
});
app.get('/about', (req, res) => {
    res.render('pages/about');
});
app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});