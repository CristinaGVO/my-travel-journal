const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

// ruta get con filtros incluidos

router.get('/', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
  
      let trips = currentUser.trips;
  
      const { tripType, minRating, welcome} = req.query;
  
      // Filtro por tipo de viaje
      if (tripType && tripType !== '') {
        trips = trips.filter((trip) => trip.tripType === tripType);
    }
  
      // Filtro por rating 
      if (minRating && minRating !== '') {
        const min = Number(minRating);
        trips = trips.filter((trip) => {

          // solo filtra si el trip tiene rating
          return typeof trip.rating === 'number' && trip.rating >= min;
        });
    } // para incluir el nombre en sigin
      const showWelcome = welcome === 'true';

    res.render('trips/index.ejs', {
      trips,
      selectedTripType: tripType || '',
      selectedMinRating: minRating || '',
      showWelcome,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});
  

//ruta get para la nueva
router.get('/new', async (req, res) => {
  res.render('trips/new.ejs');
});

// Show ruta para mostrar

router.get('/:tripId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const trip = currentUser.trips.id(req.params.tripId);
    res.render('trips/show.ejs', {
    trip: trip,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


// ruta para poner informacion

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


// delete

router.delete('/:tripId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.trips.id(req.params.tripId).deleteOne();
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/trips`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// ruta editar -update informacion

router.put('/:tripId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const trip = currentUser.trips.id(req.params.tripId);
    trip.set(req.body);
    await currentUser.save();
    res.redirect(
      `/users/${currentUser._id}/trips/${req.params.tripId}`
    );
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

//editar el trip

router.get('/:tripId/edit', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const trip = currentUser.trips.id(req.params.tripId);
    res.render('trips/edit.ejs', {
      trip: trip,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


module.exports = router;
