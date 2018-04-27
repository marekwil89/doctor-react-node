import express from 'express';
import mongoose from 'mongoose';
const Quiz = mongoose.model('quiz');
let router = express.Router();

router.post('/', (req, res) => {

  const newQuiz = new Quiz({
    title: req.body.title,
    category: req.body.category,
    questions: req.body.questions
  });

  newQuiz.save(function(err){
    if(err){
        console.log(err)
        return;
    }
    res.send('success');
  })
})

export default router;