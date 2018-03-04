// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // objenin id'si

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

  if (err) return console.log('Unable to connect to mongodb server');
  console.log('Successfully connected to mongodb server');

  const db = client.db('TodoApp');

  //
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a99963c0867c77357b772f3')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(`Update: ${JSON.stringify(res, undefined, 2)}`);
  // }, (err) => {
  //   console.log('Unable to update data');
  // });

  // Challenge
  db.collection('Users').findOneAndUpdate({
    name: 'Burak'
  }, {
    $set: {
      name: 'Broli'
    },
    $inc: {
      age: 2
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(`Update: ${JSON.stringify(res, undefined, 2)}`);
  }, (err) => {
    console.log('Unable to update data');
  });


  client.close();

});
