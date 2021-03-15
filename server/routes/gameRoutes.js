const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController')
const urls = require('../config/url')

// middleware to check if user is logged in 
const authCheck = (req, res, next) => {
  if (!req.user){
    res.redirect(`${urls.clientURL}/auth/login`)
  } else {
    next();
  }
}

router.post('/result', gameController.postResult);
router.get('/', gameController.getBase);
router.get('/highscore', gameController.getHighscore);

module.exports = router;