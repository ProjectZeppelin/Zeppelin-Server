const app = require('./rest');
const mongoose = require('mongoose');
const db = require('./db');
const env = require('./var/environment');


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
  //let menu4 = new Menu(env.data.mysql_menu);
  let menu5 = new Menu(env.data.html_menu);
  let menu6 = new Menu(env.data.css_menu);
  let menu8 = new Menu(env.data.cpp_menu);

  db.saveUnique('menu', menu1, {
    title: menu1.title
  });
  db.saveUnique('menu', menu2, {
    title: menu2.title
  });

  db.saveUnique('menu', menu3, {
    title: menu3.title
  });

  /* db.saveUnique('menu', menu4, {
     title: menu4.title
   });*/

  db.saveUnique('menu', menu5, {
    title: menu5.title
  });

  db.saveUnique('menu', menu6, {
    title: menu6.title
  });

  db.saveUnique('menu', menu8, {
    title: menu8.title
  });

  let csharp = new Language(env.data.csharp);
  db.saveUnique('languages', csharp, {
    title: csharp.title
  });

  let java = new Language(env.data.java);
  db.saveUnique('languages', java, {
    title: java.title
  });

  let javascript = new Language(env.data.javascript);
  db.saveUnique('languages', javascript, {
    title: javascript.title
  });

  let html = new Language(env.data.html);
  db.saveUnique('languages', html, {
    title: html.title
  });

  let css = new Language(env.data.css);
  db.saveUnique('languages', css, {
    title: css.title
  });

  let cpp = new Language(env.data.cpp);
  db.saveUnique('languages', cpp, {
    title: cpp.title
  });
}
