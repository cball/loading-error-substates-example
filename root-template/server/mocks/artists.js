module.exports = function(app) {
  var express = require('express');
  var artistsRouter = express.Router();

  var artists = [
    {"id": 1, "name": "Tauk", "image": "http://www.glidemagazine.com/glide/wp-content/uploads/legacy/tauk1.jpg"},
    {"id": 2, "name": "Foo Fighters", "image": "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0019/5219/brand.gif"},
    {"id": 3, "name": "Minus The Bear", "image": "http://th03.deviantart.net/fs71/200H/f/2011/284/c/0/minus_the_bear_logo_by_mrjiggles4-d4cjd90.png"}
  ];

  var findObject = function(id) {
    for (var i = 0; i < artists.length; i++) {
      if (artists[i].id === id) {
        return artists[i];
      }
    }
  }

  artistsRouter.get('/', function(req, res) {
    res.send({
      "artists": artists
    });
  });

  artistsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  artistsRouter.get('/:id', function(req, res) {
    var found = findObject(req.params.id);
    if (found) {
      res.send({
        "artists": findObject(id)
      });
    }
    else {
      res.status(404).end();
    }
  });

  artistsRouter.put('/:id', function(req, res) {
    res.send({
      "artists": {
        "id": req.params.id
      }
    });
  });

  artistsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/artists', artistsRouter);
};
