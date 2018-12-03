(function () {
  let Data = {
    java_menu: {
      title: "java",
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
      title: "javascript",
      url: "/language/javascript",
      children: [{
        title: "javascript",
        url: "/language/javascript",
        children: []
      }]
    },

    csharp_menu: {
      title: "CSharp",
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
