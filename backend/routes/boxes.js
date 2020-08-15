const router = require('express').Router(); //Get the router from express
let Box = require('../models/box.model'); //Get the Mongoose user model

//GET Donation Box
router.route('/').get((req, res) => {
    Box.find().then(Box => res.json(boxes)).catch(err => res.status(400).json('Errors: ' + err));
});

module.exports = router;