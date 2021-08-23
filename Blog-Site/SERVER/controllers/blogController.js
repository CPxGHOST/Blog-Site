const express = require('express');
const Blog = require('../models/blog');
const bodyParser = require('body-parser');

const blogRouter = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });


//get all blogs
blogRouter.route('/').get((req , res) => {
    Blog.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
});

// Get a single blog
blogRouter.route('/:id').get((req , res) => {
    Blog.findById(req.params.id)
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
});

// Add Blog
blogRouter.route('/').post(urlencodedParser, (req, res) => {
  
    let blog = new Blog({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category
    });
    
    blog.save()
        .then((result)=> {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}); 


// Update Blog
blogRouter.route('/:id').put(urlencodedParser, (req , res) => {
    let id = req.params.id;
    let title = req.body.title;
    let content = req.body.content;
    let category = req.body.category;

    Blog.findByIdAndUpdate(id , {title: title, content: content, category: category})
        .then((result) => {
            res.redirect('/');          
        })
        .catch((err) => {
            console.log(err);
        });
});

// Delete blog
blogRouter.route('/:id').delete((req , res) => {
    Blog.findByIdAndDelete(req.params.id)
        .then(() => {
            console.log('Deleted');
        })
        .catch(err => {
            console.log(err);
        })
})




module.exports = blogRouter;