(function () {
  const express = require('express');
  const bodyParser = require('body-parser');
  const router = express.Router();

  // Constants
  const PORT = 3000;
  const HOST = '0.0.0.0';

  let callback; // used to inform the database connection that a GET happend
  let menu;

  let i = 0;

  // App
  const app = express();
  app.get('/count', (req, res) => {
    i++;
    if (callback) callback(); // update the dataase with the new index
    res.send('You are user number ' + i + "\n");
  });

  app.get('/menu', (req, res) => {
    if (menu) {
      let val = menu;
      console.log(val);
      res.send(val);
    } else {
      console.log("No callback provided");
      res.send("No callback provided \n");
    }
  });

  app.get('/language/:id', (req, res) => {
    console.log(req.params.id);
    res.send(req.params.id);
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

  module.exports.setI = function (index) {
    i = index;
  }

  module.exports.getI = function (index) {
    return i;
  }

  module.exports.handleGet = function (cb) {
    callback = cb;
  }

  module.exports.setMenu = function (Menu) {
    menu = Menu;
  }

}());
