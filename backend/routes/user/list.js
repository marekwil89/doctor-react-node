import express from 'express';
import mongoose from 'mongoose';
const User = mongoose.model('user');
let router = express.Router();

router.get('/', (req, res) => {
  User.find({
    type: 'user',
  }, (err, users) => {
    if(err){
      console.log(err)
    }
    return res.send(users)
  })
})

export default router;