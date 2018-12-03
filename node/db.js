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
      db.db.collection("time", function (err, collection) {
        collection.find({}).toArray(function (err, data) {
          if (cb) cb();
          if (data[0]) {
            i = data[0].val;
            app.setI(i);
          }
          app.handleGet(function () {
            console.log("Received get");
            console.log("Saving instance to database");
            saveNum(app.getI());
          });
          setCollectionDataREST("menu");

        });
      });
    });
  }

  // create mongoose schema
  const timeSchema = new mongoose.Schema({
    val: Number
  }, {
    collection: 'time'
  });

  // create mongoose model
  const Time = mongoose.model('time', timeSchema);

  function saveNum(index) {
    let obj = {
      val: index
    };
    db.db.collection("time", function (err, collection) {
      collection.findOneAndUpdate({}, obj, {
        upsert: true
      });
    });
  }

  function saveObject(obj) {
    db.db.collection("time", function (err, collection) {
      collection.findOneAndUpdate({}, obj, {
        upsert: true
      });
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

  module.exports.getModel = function () {
    return Time;
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


  /*const AddedUser = new User({
      name: "kekakik",
      age: 8
  });

  AddedUser.save().then(function (err, user) {
      if (err) return console.error(err);
      console.log("User added");
  });
  */

}());
