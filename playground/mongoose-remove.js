const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
//   });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({ _id: '5ae96dc6c19b84c5b4637851' }).then(todo => {});

Todo.findByIdAndRemove('5ae96dc6c19b84c5b4637851').then(todo => {
  console.log(todo);
});
