module.exports = function(app) {
  var express = require('express');
  var commentsRouter = express.Router();

  var comments = [
    { id: 1, body: "The penalty for laughing in a courtroom is six months in jail; if it were not for this penalty, the jury would never hear the evidence." },
    { id: 2, body: "Actually, what I'd like is a little toy spaceship!!" },
    { id: 3, body: "If it wasn't for the last minute, nothing would get done" },
    { id: 4, body: "Santa's elves are just a bunch of subordinate Clauses." },
    { id: 5, body: "Try not to have a good time ... This is supposed to be educational." }
  ]

  var findObject = function(id) {
    for (var i = 0; i < comments.length; i++) {
      if (comments[i].id.toString() === id.toString()) {
        return comments[i];
      }
    }
  }

  commentsRouter.get('/', function(req, res) {
    res.send({
      "comments": comments
    });
  });

  commentsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  commentsRouter.get('/:id', function(req, res) {
    var found = findObject(req.params.id);
    if (found) {
      setTimeout(function() {
        res.send({
          "comments": found
        });
      }, 1000);
    }
    else {
      res.status(404).end();
    }
  });

  commentsRouter.put('/:id', function(req, res) {
    res.send({
      "comments": {
        "id": req.params.id
      }
    });
  });

  commentsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/comments', commentsRouter);
};
