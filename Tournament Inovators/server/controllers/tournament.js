let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Tournament = require('../models/tournament');

module.exports.displayTournamentList = (req, res, next) => {
    Tournament.find((err, tournamentList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(TournamentList);

            res.render('tournament/list', 
            {title: 'Tournament Sign-Up Page', 
            TournamentList: tournamentList, 
            displayName: req.user ? req.user.displayName : ''});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('tournament/add', {title: 'Add a Tournament', 
    displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newTournament = Tournament({
        "tournamentName": req.body.tournamentName,
        "tournamentOwner": req.body.tournamentOwner,
        "region": req.body.region,
        "StartDate": req.body.StartDate,
        "EndDate": req.body.EndDate,
        "description": req.body.description,
    });

    Tournament.create(newTournament, (err, Tournament) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the tournament list
            res.redirect('/tournament-list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Tournament.findById(id, (err, tournamentToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('tournament/edit', {title: 'Edit This Tournament', tournament: tournamentToEdit, 
            displayName: req.user ? req.user.displayName : ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedTournament = Tournament({
        "_id": id,
        "tournamentName": req.body.tournamentName,
        "tournamentOwner": req.body.tournamentOwner,
        "region": req.body.region,
        "StartDate": req.body.StartDate,
        "EndDate": req.body.EndDate,
        "description": req.body.description,
    });

    Tournament.updateOne({_id: id}, updatedTournament, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the tournament list
            res.redirect('/tournament-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Tournament.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the tournament list
             res.redirect('/tournament-list');
        }
    });
}