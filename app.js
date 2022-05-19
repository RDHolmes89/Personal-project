const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;
const path = require('path');
const methodOverride = require('method-override');
const routes = require('')

//set up ejs files to be viewed
app.set('view engine', 'ejs');

//app.use() will replaces the app.get()req,res ('') which youll probably use first

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})