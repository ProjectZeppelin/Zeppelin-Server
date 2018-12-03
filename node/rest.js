(function () {
  const express = require('express');
  const bodyParser = require('body-parser');
  const router = express.Router();

  // Constants
  const PORT = 3000;
  const HOST = '0.0.0.0';

  let menu;

  let db;

  // App
  const app = express();

  app.get('/menu', (req, res) => {
    db.sendCollection('menu', {}, res);
  });

  app.get('/language/:id', (req, res) => {
    console.log(req.params.id);
    db.sendCollection('languages', {
      title: req.params.id
    }, res);
    //res.send(req.params.id);
  });

  app.get('/language', (req, res) => {
    db.sendCollection('languages', {}, res);
  });

  // Parsers for POST data
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  // Cross Origin middleware
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })


  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);

  module.exports.getSomeThings = function () {
    return app;
  }

  module.exports.setMenu = function (Menu) {
    menu = Menu;
  }
  module.exports.setDB = function (DB) {
    db = DB;
  }
}());
