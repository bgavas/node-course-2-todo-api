// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // objenin id'si

// Destructuring
// var user = {
//   name: 'Burak',
//   age: 26
// };
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

  if (err) return console.log('Unable to connect to mongodb server');
  console.log('Successfully connected to mongodb server');

  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, res) => {
  //   if (err) return console.log('Unable to insert data');
  //   console.log(`Successfully inserted the data: ${JSON.stringify(res.ops, undefined, 2)}`);
  // });

  // db.collection('Users').insertOne({
  //   // _id: 123,
  //   name: 'Burak',
  //   age: 26,
  //   location: 'Istanbul'
  // }, (err, res) => {
  //   if (err) return console.log('Unable to insert data');
  //   console.log(`Successfully inserted the data: ${JSON.stringify(res.ops, undefined, 2)}`);
  //   console.log(`Timestamp: ${res.ops[0]._id.getTimestamp()}`)
  // });

  client.close();

});
