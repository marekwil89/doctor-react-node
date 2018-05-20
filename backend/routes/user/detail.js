import express from 'express';
import mongoose from 'mongoose';
const User = mongoose.model('user');
let router = express.Router();

router.get('/:id', (req, res) => {
  User.findOne({_id: req.params.id}, (err, user) => {
    if(err){
        console.log(err)
    }
    return res.send(user)
  })
})

export default router;