import express from 'express';
import mongoose from 'mongoose';
const Quiz = mongoose.model('quiz');
let router = express.Router();

router.get('/', (req, res) => {

  Quiz.find({}, function(err, quizzes){
    if(err){
        console.log(err)
    }
    return res.send(quizzes)
  })
})

export default router;