const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let newTodo = new Todo({
    text: req.body.text
  });
  newTodo.save().then((docs) => {
    res.send(docs);
    console.log(`Saved to do: ${JSON.stringify(docs, undefined, 2)}`);
  }, (e) => {
    res.status(400).send(e);
    console.log('Unable to save');
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
    console.log(`Saved to do: ${JSON.stringify(docs, undefined, 2)}`);
  }, (e) => {
    res.status(400).send(e);
    console.log('Unable to save');
  });
});

app.post('/users', (req, res) => {
  let newUser = new User({
    email: req.body.text
  });
  newUser.save().then((docs) => {
    res.send(docs);
    console.log(`Saved to do: ${JSON.stringify(docs, undefined, 2)}`);
  }, (e) => {
    res.status(400).send(e);
    console.log('Unable to save');
  });
});

app.listen(3000, () => {
  console.log(`App started on port 3000`);
});


module.exports = {app};
