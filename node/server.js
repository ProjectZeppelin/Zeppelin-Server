const app = require('./rest');
const mongoose = require('mongoose');
const db = require('./db');
const env = require('./environment');


// create mongoose schema
const MenuSchema = new mongoose.Schema({
  title: String,
  url: String,
  children: []
}, {
  collection: 'menu'
});

// create mongoose schema
const LanguageSchema = new mongoose.Schema({
  title: String,
  data: []
}, {
  collection: 'languages'
});



// create mongoose model
const Menu = mongoose.model('menu', MenuSchema);
const Language = mongoose.model('languages', LanguageSchema);

setTimeout(() => {
  db.init(() => {
    saveDataFirstTime();

    db.setREST(app);
    app.setDB(db);
  });
}, env.data.timeout);


function saveDataFirstTime() {
  let menu1 = new Menu(env.data.java_menu);
  let menu2 = new Menu(env.data.javascript_menu);
  let menu3 = new Menu(env.data.csharp_menu);
  db.saveUnique('menu', menu1, {
    title: menu1.title
  });
  db.saveUnique('menu', menu2, {
    title: menu2.title
  });

  db.saveUnique('menu', menu3, {
    title: menu3.title
  })

  let csharp = new Language(env.data.csharp);
  db.saveUnique('languages', csharp, {
    title: csharp.title
  });

  let csharp_classes = new Language(env.data.csharp_classes);
  db.saveUnique('languages', csharp_classes, {
    title: csharp.title
  });

  let csharp_oop_basic = new Language(env.data.csharp_oop_basic);
  db.saveUnique('languages', csharp_oop_basic, {
    title: csharp.title
  });

  let csharp_polymorphism = new Language(env.data.csharp_polymorphism);
  db.saveUnique('languages', csharp_polymorphism, {
    title: csharp.title
  });

  let java = new Language(env.data.java);
  db.saveUnique('languages', java, {
    title: csharp.title
  });

  let java_advanced = new Language(env.data.java_advanced);
  db.saveUnique('languages', java_advanced, {
    title: csharp.title
  });

  let javascript = new Language(env.data.javascript);
  db.saveUnique('languages', javascript, {
    title: csharp.title
  });
}
