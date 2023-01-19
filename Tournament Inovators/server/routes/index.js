let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* POST Route for processing the Contact Us page */
router.post('/contact', indexController.processContactPage);

/* GET Tournament Matchup page. */
router.get('/tournament-matchup', indexController.displayTournamentMatchupPage);

/* POST Route for processing the Tournament Matchup page */
router.post('/tournament-matchup', indexController.processTournamentMatchupPage);

/* GET Active Tournaments page. */
router.get('/register-players', indexController.displayRegisterPlayersPage);

/* POST Route for processing the Active Tournaments page */
router.post('/register-players', indexController.processRegisterPlayersPage);

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);



module.exports = router;
