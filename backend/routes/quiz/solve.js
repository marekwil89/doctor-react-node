import express from 'express';
import mongoose from 'mongoose';
const User = mongoose.model('user');
let router = express.Router();

router.post('/', (req, res) => {

	User.findById({_id: req.user.id}, function(err, user){    
    user.quizzes.push({
      title: req.body.quizDetail.title,
      category: req.body.quizDetail.category,
      questions: req.body.quizDetail.questions
    });

		user.save((err) => {
			if(err){
				console.log(err)
			}
      res.send('success');
		})
	})

})

export default router;