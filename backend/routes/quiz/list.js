import express from 'express';
import mongoose from 'mongoose';
const Quiz = mongoose.model('quiz');
const User = mongoose.model('user');
let router = express.Router();

router.post('/', (req, res) => {

  let filterData = {
    _id: {
      $nin: [],
    }
  }

  if(req.body.solved && req.user){
    req.user.quizzes.forEach((elem) => {
      filterData._id.$nin.push(new mongoose.Types.ObjectId( elem.originalId ))
    });
  }

  if(req.body.recommend && req.user){
    const inArr = [];
    req.user.recommends.forEach((elem) => {
      inArr.push(new mongoose.Types.ObjectId( elem ))
    });
    filterData._id['$in'] = inArr;
  }

  if(req.body.all || !req.user){
    filterData = {};
  }

  Quiz.find(filterData, (err, quizzes) => {
    if(err){
        console.log(err)
    }
    return res.send(quizzes)
  })
})

export default router;