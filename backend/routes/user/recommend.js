import express from 'express';
import mongoose from 'mongoose';
const User = mongoose.model('user');
let router = express.Router();

router.post('/', (req, res) => {
	User.findById({_id: req.body.userId}, (err, user) => {
  
    if (!user.recommends.includes(req.body.quizId)){
      user.recommends.push(req.body.quizId);
    }

		user.save((err) => {
			if(err){
				console.log(err)
			}
      res.send('success');
		})
	})
})

export default router;