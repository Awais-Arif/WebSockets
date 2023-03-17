const express = require('express');
const mongoose = require("mongoose");
const Post = require('./models/post')
const bodyParser = require('body-parser')
const app = express();

mongoose.connect("mongodb+srv://Awais-007:54626587@mean-db.h23eivz.mongodb.net/mean-course?retryWrites=true&w=majority")
  .then(() => {
    console.log('connected');
  })
  .catch(() => {
    console.log('connection failed');
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
  next()
})

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  })
  post.save();
  res.status(201).json({
    message: 'Post Added!'
  })
})
app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: "3456",
      title: "first post",
      content: "content is king"
    },
    {
      id: "1244",
      title: "second post",
      content: "content is here"
    }
  ]
  res.status(200).json({
    message: "posts fetched successfully!",
    posts: posts
  })
})
module.exports = app;


