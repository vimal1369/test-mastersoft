const express = require('express');
const router = express.Router();
const User = require('../models/Users');

/* GET home page. */
router.post('/save-users', function(req, res, next) {
  let postdata =   req.body;
console.log('data',postdata)
  const joe = new User(postdata);
  joe.save()
    .then((user) => {
      console.log('saved successfully');
      res.json({'status':200,'data':user});
}).catch( errors =>  res.json({'status':401,'error':error}));

});

/* GET home page. */
router.get('/get-users-info', function(req, res, next) {
  User.find({ })
      .then((users) => {
        res.json({'status':200,'users':users});
      })
  .catch( errors =>  res.json({'status':401,'error':error}));

});

module.exports = router;
