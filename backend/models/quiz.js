const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new mongoose.Schema({
  title: {type: String},
  category: {type: String},
  questions: [{
    text: {type: String},
    answers: [{
      text: {type: String},
      selected: {type: Boolean, default: false}
    }]
  }],
  created_at: {type: Date, default: Date.now}
});

mongoose.model('quiz', quizSchema);