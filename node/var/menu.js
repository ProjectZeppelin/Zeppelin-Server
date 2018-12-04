(function () {
  let Data = {
    java_menu: {
      title: "Java",
      url: "/language/java",
      children: [{
          title: "java",
          url: "/language/java",
          children: []
        },
        {
          title: "java advanced",
          url: "/languages/java_advanced",
          children: []
        }
      ]
    },
    javascript_menu: {
      title: "Javascript",
      url: "/language/javascript",
      children: [{
        title: "javascript",
        url: "/language/javascript",
        children: []
      }]
    },
    mysql_menu: {
      title: "MySQL",
      url: "/language/MYSQL",
      children: [{
        title: "MYSQL",
        url: "/language/MYSQL",
        children: []
      }]
    },
    csharp_menu: {
      title: "C#",
      url: "/languages/csharp",
      children: [{
          title: "basics",
          url: "/languages/csharp",
          children: []
        },
        {
          title: "classes",
          url: "/languages/csharp_classes",
          children: []
        },
        {
          title: "OOP",
          url: "/languages/csharp_oop",
          children: [{
              title: "basics",
              url: "/languages/csharp_oop_basic",
              children: []
            },
            {
              title: "polymorphism",
              url: "/languages/csharp_polymorphism",
              children: []
            },
          ]
        },
      ]
    }
  }

  module.exports.data = Data;
}());
