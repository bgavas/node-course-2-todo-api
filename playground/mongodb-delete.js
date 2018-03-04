// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // objenin id'si

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

  if (err) return console.log('Unable to connect to mongodb server');
  console.log('Successfully connected to mongodb server');

  const db = client.db('TodoApp');

  // Delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
  //   console.log(`Deletion: ${res}`);
  // }, (err) => {
  //   console.log('Unable to delete data');
  // });

  // Delete one and stop
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
  //   console.log(`Deletion: ${res}`);
  // }, (err) => {
  //   console.log('Unable to delete data');
  // });

  // Find one and delete
  // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((res) => {
  //   console.log(`Deletion: ${JSON.stringify(res, undefined, 2)}`);
  // }, (err) => {
  //   console.log('Unable to delete data');
  // });

  //
  db.collection('Users').deleteMany({name: 'Burak'}).then((res) => {
    console.log(`Deletion: ${res)}`);
  }, (err) => {
    console.log('Unable to delete data');
  });

  //
  db.collection('Users').findOneAndDelete({_id: new ObjectID('d')}).then((res) => {
    console.log(`Deletion: ${JSON.stringify(res, undefined, 2)}`);
  }, (err) => {
    console.log('Unable to delete data');
  });


  client.close();

});
