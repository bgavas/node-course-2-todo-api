// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // objenin id'si

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

  if (err) return console.log('Unable to connect to mongodb server');
  console.log('Successfully connected to mongodb server');

  const db = client.db('TodoApp');

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(`Docs: ${JSON.stringify(docs, undefined, 2)}`);
  // }, (err) => {
  //   console.log('Unable to get data');
  // });

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a99963c0867c77357b772f3')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(`Docs: ${JSON.stringify(docs, undefined, 2)}`);
  // }, (err) => {
  //   console.log('Unable to get data');
  // });


  db.collection('Todos').find({}).count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to get data');
  });

  client.close();

});
