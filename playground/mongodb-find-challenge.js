// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // objenin id'si

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

  if (err) return console.log('Unable to connect to mongodb server');
  console.log('Successfully connected to mongodb server');

  const db = client.db('TodoApp');

  db.collection('Users').find({
    name: 'Burak'
  }).toArray().then((docs) => {
    console.log(`${JSON.stringify(docs, undefined, 2)}`);
  }, (err) => {
    console.log('Unable to get data');
  });

  client.close();

});
