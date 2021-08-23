const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const blogController = require('./controllers/blogController');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const dbURI = 'mongodb+srv://mridul:qwertyuiop1234567890@todo.4zjnj.mongodb.net/blogs-database?retryWrites=true&w=majority';

app.use(bodyParser());
app.use(cors({ origin: 'http://localhost:4200'}));

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000, () => {
        console.log('server started at http://localhost:3000');
    }))
    .catch((err) => console.log(err));

app.use('/blogs', blogController);

