(function () {
  const mongoose = require('mongoose');
  const app = require('./rest');

  const dbHost = 'mongodb://db:27017/test';
  var db = mongoose.connection;
  let i = 0;

  function init(cb) {
    // Connect to mongodb
    mongoose.connect(dbHost, {
      useMongoClient: true
    });

    db.on('error', () => console.log("Error"));
    db.once('open', function () {
      console.log("Connected");
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
}());
