(function () {

  const menu = require('./menu');
  const java = require('./java');
  const javascript = require('./javascript');
  const csharp = require('./csharp');

  let Data = {
    timeout: 5000,
  }

  function jsonConcat(o1, o2) {
    for (var key in o2) {
      o1[key] = o2[key];
    }
    console.log(o1);
    return o1;
  }

  let merged = { ...Data,
    ...menu.data,
    ...csharp.data,
    ...java.data,
    ...javascript.data
  };


  module.exports.data = merged;

}());
