module.exports = function(app) {
  var express = require('express');
  var albumsRouter = express.Router();

  var albums = [
    {
      id: 1,
      name: 'Homunculus',
      image: "http://ecx.images-amazon.com/images/I/61OV1r8z74L._SL500_AA280_.jpg",
      artist: 1,
      comments: [1,2],
      reviews: [1]
    },
    {
      id: 2,
      name: 'Collisions',
      image: "http://www.tristateindie.com/wp-content/uploads/2014/07/collisions.jpg",
      artist: 1,
      comments: [2,3],
      reviews: [1]
    },
    {
      id: 3,
      name: 'Sonic Highways',
      image: "http://www.billboard.com/files/media/foo-fighters-sonic-highways-410.jpg",
      artist: 2,
      comments: [3,4],
      reviews: [1]
    },
    {
      id: 4,
      name: 'The Colour And The Shape',
      image: "http://upload.wikimedia.org/wikipedia/en/0/0d/FooFighters-TheColourAndTheShape.jpg",
      artist: 2,
      comments: [4,5],
      reviews: [1]
    },
    {
      id: 5,
      name: 'Omni',
      image: "http://www.thestranger.com/binary/bd88/1272995260-41685cx7aol._sl500_aa300_.jpg",
      artist: 3,
      comments: [4,5],
      reviews: [1]
    },
    {
      id: 6,
      name: 'Infinity Overhead',
      image: "http://upload.wikimedia.org/wikipedia/en/0/00/MinusTheBearInfinityOverhead.jpg",
      artist: 3,
      comments: [4,5],
      reviews: [1]
    }
  ];

  var findObject = function(id) {
    for (var i = 0; i < albums.length; i++) {
      if (albums[i].id.toString() === id.toString()) {
        return albums[i];
      }
    }
  }

  albumsRouter.get('/', function(req, res) {
    setTimeout(function() {
      res.send({
        "albums": albums
      });
    }, 2000);
  });

  albumsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  albumsRouter.get('/:id', function(req, res) {
    var found = findObject(req.params.id);
    if (found) {
      setTimeout(function() {
        res.send({
          "albums": found
        });
      }, 2000);
    }
    else {
      res.status(404).end();
    }
  });

  albumsRouter.put('/:id', function(req, res) {
    res.send({
      "albums": {
        "id": req.params.id
      }
    });
  });

  albumsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/albums', albumsRouter);
};
