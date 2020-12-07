const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Feed
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Feed
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    let battle = req.body;
    // console.log("what info is here?" + JSON.stringify(battle))
    battle.meme1 = req.body.id;
    battle.meme2 = "";
    battle.meme2Challenger = req.body.imageOf;
    battle.meme1Initiator = req.body.createdBy;
    battle.meme1votes = 0;
    battle.meme2votes = 0;
    db.Feed
      .create(battle)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    // console.log("tell me somehting good", req.params._id, req.body)
    db.Feed
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Feed
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findChallenges: function(req, res) {
    // console.log("are we here in feedController?", req.params)
    db.Meme
      .find({meme2Challenger:req.params})
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
