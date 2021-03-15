const router = require('express').Router();
const {googlelogin, checkToken, getUser} = require('../controllers/userController');

router.post("/tokenIsValid", checkToken);
router.post('/googlelogin', googlelogin);
router.get("/", getUser);


module.exports = router ;
