const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  email: {type: String},
  password: {type: String},
  repeatPassword: {type: String},
  created_at: {type: Date, default: Date.now},
  type: {type: String, default: 'doctor'},
  recommends: {type: Array},
  quizzes: [
      {
        title: {type: String},
        category: {type: String},
        originalId: {type: String},
        questions: [
          {
          text: {type: String},
          answers: [
            {
              text: {type: String},
              selected: {type: Boolean, default: false}
            }
          ]
        }
      ],
    }
  ]
});

mongoose.model('user', userSchema);