import express from 'express';
import mongoose from 'mongoose';
const Quiz = mongoose.model('quiz');
const User = mongoose.model('user');
let router = express.Router();

router.post('/', (req, res) => {
  User.findOne({_id: req.body.selectedUserId}, (err, user) => {
    let filterData = {
      _id: {
        $nin: [],
      }
    }
    
    if(user.recommends){
      user.recommends.forEach((elem) => {
        filterData._id.$nin.push(new mongoose.Types.ObjectId( elem ));
      });
    }

    if(user.quizzes.length !== 0){
      user.quizzes.forEach((elem) => {
        filterData._id.$nin.push(new mongoose.Types.ObjectId( elem.originalId ));
      });
    }

    Quiz.find(filterData, (err, quizzes) => {
      if(err){
          console.log(err)
      }
      return res.send(quizzes)
    })
  })
})

export default router;