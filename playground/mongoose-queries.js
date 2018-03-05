const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5a9d1debcbfc947a0a53ea6b';

if (!ObjectId.isValid(id)) return console.log('Invalid Id');

Todo.find({
  _id: id
}).then((todos) => {
  if (todos.length == 0) return console.log(`Id not found`);
  console.log(`Todos: ${todos}`);
}).catch((err) => {
  console.log(err);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  if (!todo) return console.log(`Id not found`);
  console.log(`Todo: ${todo}`);
}).catch((err) => {
  console.log(err);
});

Todo.findById(id).then((todo) => {
  if (!todo) return console.log(`Id not found`);
  console.log(`Todo by id: ${todo}`);
}).catch((err) => {
  console.log(err);
});
