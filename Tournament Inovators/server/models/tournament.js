let mongoose = require('mongoose');

// create a model class
let tournamentModel = mongoose.Schema({
    tournamentName: String,
    tournamentOwner: String,
    region: String,
    StartDate: String,
    EndDate: String,
    description: String,
    playerOne: String,
    playerTwo: String,
    playerThree: String,
    playerFour: String,
    playerFive: String,
    playerSix: String,
    playerSeven: String,
    playerEight: String,
},
{
    collection: "tournaments"
});

module.exports = mongoose.model('Tournament', tournamentModel);
//Comp229 2022 Fall