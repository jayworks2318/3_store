const dotEnv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
//const path = require('path');

const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

//Index
app.get('/store', (req, res) => {
    res.render("Index");
});

//Show
app.get('/store/show', (req, res) => {
    res.render("Show");
});


const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Establish 

mongoose.connect(DATABASE_URL, CONFIG);


const PORT = process.env.PORT;
app.listen(PORT);