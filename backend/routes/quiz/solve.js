import express from 'express';
import mongoose from 'mongoose';
const User = mongoose.model('user');
let router = express.Router();

router.post('/', (req, res) => {

	User.findById({_id: req.user.id},(err, user) => {
    user.quizzes.push({
      originalId: req.body._id,
      title: req.body.title,
      category: req.body.category,
      questions: req.body.questions
    });

    var index = user.recommends.indexOf(req.body._id);
    if (index !== -1) user.recommends.splice(index, 1);

		user.save((err) => {
			if(err){
				console.log(err)
			}
      res.send(
        {
          param: true,
          message: 'success'
        }
      )
		})
	})
})

export default router;