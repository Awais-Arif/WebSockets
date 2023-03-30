// const express = require('express');
// const mongoose = require("mongoose");
// const Post = require('./models/post')
// const bodyParser = require('body-parser')
// const app = express();

// mongoose.connect("mongodb+srv://Awais-007:54626587@mean-db.h23eivz.mongodb.net/mean-course?retryWrites=true&w=majority")
//   .then(() => {
//     console.log('connected');
//   })
//   .catch(() => {
//     console.log('connection failed');
//   })

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*")
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
//   next()
// })

// app.post("/api/posts", (req, res, next) => {
//   const post = new Post({
//     title: req.body.title,
//     content: req.body.content
//   })
//   post.save();
//   res.status(201).json({
//     message: 'Post Added!'
//   })
// })
// app.get('/api/posts', (req, res, next) => {
//   Post.find().then(document => {

//     res.status(200).json({
//       message: "posts fetched successfully!",
//       posts: document
//     })
//   })
// })

// app.get('/api/post-by-id', (req, res, next) => {
//   Post.findById({ _id: req.params.id }).then(document => {
//     res.status(200).json({
//       message: "posts fetched successfully!",
//       posts: document
//     })
//   })
// })

// app.put("/api/posts/:id", (req, res, next) => {

//   Post.updateOne({ _id: req.params.id }.then(response => {
//     const post = new Post({
//       _id: req.body._id,
//       title: req.body.title,
//       content: req.body.content
//     })
//     post.save();
//     res.status(201).json({
//       message: 'Post Updated!!'
//     })

//   })
//   )
// })
// app.delete('/api/posts/:id', (req, res, next) => {

//   Post.deleteOne({ _id: req.params.id }).then(response => {
//     res.status(200).json({
//       message: "posts deleted successfully!",
//       posts: response
//     })
//   })
// })
// module.exports = app;




// const http = require('http');
// const app = require('./Backend/app')
// const port = process.env.PORT || 3000;
// const server = http.createServer(app);
// server.listen(port);


// const app = require("./backend/app");
// const debug = require("debug")("node-angular");
// const http = require("http");

// const normalizePort = val => {
//   var port = parseInt(val, 10);

//   if (isNaN(port)) {
//     // named pipe
//     return val;
//   }

//   if (port >= 0) {
//     // port number
//     return port;
//   }

//   return false;
// };

// const onError = error => {
//   if (error.syscall !== "listen") {
//     throw error;
//   }
//   const bind = typeof port === "string" ? "pipe " + port : "port " + port;
//   switch (error.code) {
//     case "EACCES":
//       console.error(bind + " requires elevated privileges");
//       process.exit(1);
//       break;
//     case "EADDRINUSE":
//       console.error(bind + " is already in use");
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// };

// const onListening = () => {
//   const addr = server.address();
//   const bind = typeof port === "string" ? "pipe " + port : "port " + port;
//   debug("Listening on " + bind);
// };

// const port = normalizePort(process.env.PORT || "3000");
// app.set("port", port);

// const server = http.createServer(app);
// server.on("error", onError);
// server.on("listening", onListening);
// server.listen(port);




/**
 * Module dependencies.
 */





var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

// app.use('/', appRoutes);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   res.send('index');
// });

module.exports = app;
