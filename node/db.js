(function () {
  const mongoose = require('mongoose');

  const dbHost = 'mongodb://db:27017/test';
  var db = mongoose.connection;
  let app

  function init(cb) {
    // Connect to mongodb
    mongoose.connect(dbHost, {
      useMongoClient: true
    });

    db.on('error', () => console.log("Error"));
    db.once('open', function () {
      console.log("Connected");
      if (cb) cb();
      setCollectionDataREST("menu");

    });
  }

  function saveObjectInCollection(obj, col) {
    db.db.collection(col, function (err, collection) {
      collection.findOneAndUpdate({}, obj, {
        upsert: true
      });
    });
  }

  function printCollection(col) {
    db.db.collection(col, function (err, collection) {
      collection.find({}).toArray(function (err, data) {
        console.log(data); // it will print your collection data
      });
    });
  }

  function setCollectionDataREST(col) {
    db.db.collection(col, function (err, collection) {
      /*collection.find({}).toArray(function (err, data) {
          return data;
      });*/
      return collection.find({}).toArray().then((x) => app.setMenu(x));
    });
  }

  function getCollectionData(col) {
    db.db.collection(col, function (err, collection) {
      collection.find({}).toArray(function (err, data) {
        return data;
      });
      //collection.find({}).toArray()
    });
  }

  function sendRestCollection(col, query, res) {
    db.db.collection(col, function (err, collection) {
      collection.find(query).toArray(function (err, data) {
        if (data.length !== 0) {
          res.send(data);
        } else {
          res.send("Unable to retrieve data");
        }
      });
    })
  }

  function sendRestCollectionArrayPart(col, query, index, res) {
    db.db.collection(col, function (err, collection) {
      collection.find(query).toArray(function (err, data) {
        if (data.length > index) {
          res.send(data[index]);
        } else {
          console.log('Requested inex is out of bounds');
          console.log(data);
          res.send('Requested item is out of bounds');
        }
      });
    })
  }

  function saveUnique(col, obj, id) {
    db.db.collection(col, function (err, collection) {
      collection.find(id).toArray(
        function (err, data) {
          console.log(data);
          if (data.length === 0) {
            obj.save((err) => {
              if (err) console.log(err);
            });
            console.log('saving object because it is unique');
          } else {
            console.log('Object already exists in the database. Not Saving');
          }
        }
      );
    })
  }

  module.exports.getCollection = function () {
    return db;
  }

  module.exports.init = function (callback) {
    init(callback);
  }

  module.exports.saveObjectInCollection = function (obj, col) {
    saveObjectInCollection(obj, col);
  }

  module.exports.getCollectionData = function (col) {
    return getCollectionData(col);
  }

  module.exports.setREST = function (rest) {
    app = rest;
  }

  module.exports.printCol = function (col) {
    printCollection(col);
  }

  module.exports.sendCollection = function (col, query, res) {
    sendRestCollection(col, query, res);
  }

  module.exports.sendCollectionArrayPart = function (col, query, index, res) {
    sendRestCollectionArrayPart(col, query, index, res);
  }

  module.exports.saveUnique = function (col, obj, id) {
    saveUnique(col, obj, id);
  }



}());
