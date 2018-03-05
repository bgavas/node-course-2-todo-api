const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5a9d30ca44bfc37afcfeba62';

if (!ObjectID.isValid(id)) return console.log('Invalid Id');

// Todo.remove({}).then((result) => {
//   console.log(`Result: ${result}`);
// }).catch((err) => {
//   console.log(err);
// });

// Todo.findOneAndRemove({_id: id}).then((result) => {
//   console.log(`Result: ${result}`);
// }).catch((err) => {
//   console.log(err);
// });

Todo.findByIdAndRemove(id).then((todo) => {
  if (!todo) return console.log(`Id not found`);
  console.log(`Todo by id: ${todo}`);
}).catch((err) => {
  console.log(err);
});
