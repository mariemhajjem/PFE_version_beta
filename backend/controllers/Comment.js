const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var VerifyToken = require('./VerifyToken');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
 
// Require formation model in our routes module
let Formation = require('../Models/formation');
let User = require('../Models/User');
 let Comment = require('../Models/Comment');

//  Defined update route
router.route('/update/:id').put(function (req, res) {
  
  });
 

// Defined delete | remove | destroy route
router.route('/delete/:id').get(function (req, res) {
   
});

router.post('/:formation', VerifyToken,async (req, res)=> {
  let id =req.params.formation;

  const user = await User.findOne({_id : req.userId});
  const formation = await Formation.findOne({_id : id});

  var cmt = new Comment();
  cmt.Sujet = req.body.sujet; 
  cmt.User= user._id;
  cmt.formation= formation._id;
  
  cmt.save() ;
 
  
  formation.Cmts.push(cmt);
  formation.save()
  .then(formation => {
    res.status(200).json({'formation': 'cmt is added successfully'});
  })
  .catch(error =>
{console.log(error);
})


});
router.route('/').get(function (req, res) {
    Formation.find().populate({ path:'Cmts' , model: 'Comment', select: { 'Sujet': 1, 'User':1, '_id' : 0} }).exec(function (err, session){
      if(err){
        console.log(err);
      }
      else {
        res.json(formation);
      }
    });
  });
module.exports = router;
