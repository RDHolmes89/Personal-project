const mongoose = require('mongoose');
require('dotenv');

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true},
(error) => {
    if (!error) {
        console.log("Successful connection with MonogoDB Server");
    } else {
        console.log("Error with MongoDB's connectivity");
    }
});
