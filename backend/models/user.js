const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  email: {type: String},
  password: {type: String},
  repeatPassword: {type: String},
  created_at: {type: Date, default: Date.now},
  type: {type: String, default: 'doctor'},
  quizzes: [
      {
        title: {type: String},
        category: {type: String},
        questions: [
          {
          text: {type: String},
          answers: [
            {
              test: {type: String},
              selected: {type: Boolean, default: false}
            }
          ]
        }
      ],

    }
  ]
});

mongoose.model('user', userSchema);