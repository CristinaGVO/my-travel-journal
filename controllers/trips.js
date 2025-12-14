const express = require('express');
const router = express.Router();
const User = require('../models/user.js');



router.get('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    res.render('trips/index.ejs', {
      trips: currentUser.trips,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});



router.get('/new', async (req, res) => {
  res.render('trips/new.ejs');
});


// poner informacion

router.post('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.trips.push(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/trips`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});




module.exports = router;
