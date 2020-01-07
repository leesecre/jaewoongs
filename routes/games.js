var router = require('express').Router();
var Game = require('../models/game');

// Find All
router.get('/', (req, res) => {
  Game.findAll()
    .then((games) => {
      if (!games.length) return res.status(404).send({ err: 'Game not found' });
      res.send(games);
    })
    .catch(err => res.status(500).send(err));
});


// Find One by id
router.get('/gameid/:gameid', (req, res) => {
  Game.findOneBygameid(req.params.gameid)
    .then((game) => {
      if (!game) return res.status(404).send({ err: 'Game not found' });
      console.log("1");
      res.send(game);
    })
    .catch(err => res.status(500).send(err));
});
//downloading
// router.post('/private', function (req, res) {
//     Game.findOneBygameid(req.body.gameid)
//             .exec(function (err, rGame){
//                 if (err){
//                     res.json({
//                      approve_id: "NO",
//                      approve_pw: "NO"
//                     });}
//                 if (!rGame) {
//                     Game.create(req.body)
//                         .then(game => res.send(game))
//                         .catch(err => res.status(500).send(err));
//                 } else if(rGame) {
//                      Game.updateByname(req.body.name, req.body)
//                         .then(game => res.send(game))
//                         .catch(err => res.status(500).send(err));
//                 }
//             });
// });
// Create new game document
router.post('/', (req, res) => {
  Game.create(req.body)
    .then(game => res.send(game))
    .catch(err => res.status(500).send(err));
});

// Update by id
router.put('/id/:id', (req, res) => {
  Game.updateBygameid(req.params.id, req.body)
    .then(game => res.send(game))
    .catch(err => res.status(500).send(err));
});
// Update by name
router.put('/name/:name', (req, res) => {
    Game.updateByname(req.body.name, req.body)
      .then(game => res.send(game))
      .catch(err => res.status(500).send(err));
  });
// Delete by id
router.delete('/id/:id', (req, res) => {
  Game.deleteBygameid(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = router;