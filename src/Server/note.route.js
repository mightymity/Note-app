const express = require('express');
const noteRoute = express.Router();

let Note = require('./note.model');

noteRoute.route('/add').post(function (req, res) {
  let note = new Note(req.body);
  note.save()
    .then(note => {
      res.status(200).json({'note': 'note in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
noteRoute.route('/').get(function (req, res) {
    Note.find(function(err, notes){
    if(err){
      console.log(err);
    }
    else {
      res.json(notes);
    }
  });
});

// Defined edit route
noteRoute.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Note.findById(id, function (err, notes){
      res.json(notes);
  });
});

//  Defined update route
noteRoute.route('/update/:id').post(function (req, res) {
    Note.findById(req.params.id, function(err, notes) {
    if (!notes)
      res.status(404).send("data is not found");
    else {
        notes.title = req.body.title;
        notes.content = req.body.content;
        notes.save().then(notes => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
noteRoute.route('/delete/:id').get(function (req, res) {
    Note.findByIdAndRemove({_id: req.params.id}, function(err, note){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = noteRoute;