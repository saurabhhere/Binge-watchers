const userResult = require('../models/resultModel')

module.exports.postResult = (req, res, next) => {
      userResult.findOneAndUpdate({
        email: req.body.email
      }, {
        name: req.body.name,
        score: req.body.score,
        email: req.body.email
      }, {
        upsert: true
      }).then((data) => {
          res.status(200).json(data);
      })
  }
  
module.exports.getHighscore = (req, res) => {
  userResult.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  }).sort({"score": -1}).limit(10)
}

module.exports.getBase = (req, res) => {
  res.status(200).json({
    status: "server working"
  });
};