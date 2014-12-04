module.exports = function(app) {
  var express = require('express');
  var artistsRouter = express.Router();

  var artists = [
    {
      id: 1,
      name: "Tauk",
      image: "http://www.glidemagazine.com/glide/wp-content/uploads/legacy/tauk1.jpg",
      bio: "TAUK is heavy instrumental rock fusion created by Matt Jalbert (guitar), Charlie Dolan (bass), Alric “A.C.” Carter (keyboard-organ), and Isaac Teel (drums). The transcendent instrumental band seamlessly brings together genres as diverse as melodic rock, fusion, gritty funk, progressive rock, ambient, classic rock, hip hop and jazz.",
      albums: [1,2]
    },
    {
      id: 2,
      name: "Foo Fighters",
      image: "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/0019/5219/brand.gif",
      bio: "The Foo Fighters are an American rock band, formed in Seattle in 1994. It was founded by Nirvana drummer Dave Grohl as a one-man project following the death of Kurt Cobain and the resulting dissolution of his previous band. The group got its name from the UFOs and various aerial phenomena that were reported by Allied aircraft pilots in World War II, which were known collectively as foo fighters.",
      albums: [3, 4]
    },
    {
      id: 3,
      name: "Minus The Bear",
      image: "http://th03.deviantart.net/fs71/200H/f/2011/284/c/0/minus_the_bear_logo_by_mrjiggles4-d4cjd90.png",
      bio: "Minus the Bear is an American indie rock band from Seattle, Washington.[1] Founded in 2001, the group features current and former members of Botch, Kill Sadie, and Sharks Keep Moving. Their sound has been described as Pele-esque guitar-taps and electronics with sophisticated time signature composition.",
      albums: [5, 6]
    }
  ];

  var findObject = function(id) {
    for (var i = 0; i < artists.length; i++) {
      if (artists[i].id.toString() === id.toString()) {
        return artists[i];
      }
    }
  }

  artistsRouter.get('/', function(req, res) {
    setTimeout(function() {
      res.send({
        "artists": artists
      });
    }, 2000);
  });

  artistsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  artistsRouter.get('/:id', function(req, res) {
    var found = findObject(req.params.id);
    if (found) {
      res.send({
        "artists": found
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
