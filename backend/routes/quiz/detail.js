import express from 'express';
import mongoose from 'mongoose';
const Quiz = mongoose.model('quiz');
let router = express.Router();

router.get('/:id', (req, res) => {
  Quiz.findOne({_id: req.params.id}, (err, quiz) => {
    if(err){
        console.log(err)
    }
    return res.send(quiz)
  })
})

export default router;