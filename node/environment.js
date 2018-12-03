(function () {

  let Data = {
    timeout: 5000,
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
    },
    csharp: {
      title: "csharp",
      data: [{
          title: "main method",
          subtitle: "the main method",
          gist: "www.github.com"
        },
        {
          title: "variables",
          subtitle: "basic variables",
          gist: "www.github.com"
        },

      ]
    },
    csharp_polymorphism: {
      title: "csharp_polymorphism",
      data: [{
          title: "main method",
          subtitle: "the main method",
          gist: "www.github.com"
        },
        {
          title: "variables",
          subtitle: "basic variables",
          gist: "www.github.com"
        },

      ]
    },
    csharp_oop_basic: {
      title: "csharp_oop_basic",
      data: [{
          title: "main method",
          subtitle: "the main method",
          gist: "www.github.com"
        },
        {
          title: "variables",
          subtitle: "basic variables",
          gist: "www.github.com"
        },

      ]
    },
    csharp_classes: {
      title: "csharp_classes",
      data: [{
          title: "main method",
          subtitle: "the main method",
          gist: "www.github.com"
        },
        {
          title: "variables",
          subtitle: "basic variables",
          gist: "www.github.com"
        },

      ]
    },

    java: {
      title: "java",
      data: [{
          title: "java basics",
          subtitle: "What is java",
          gist: "www.github.com"
        },
        {
          title: "java basics 2.0",
          subtitle: "how to read java",
          gist: "www.github.com"
        },

      ]
    },
    java_advanced: {
      title: "java_advanced",
      data: [{
          title: "OOP",
          subtitle: "Opject oriented code",
          gist: "www.github.com"
        },
        {
          title: "OOP extended",
          subtitle: "Extra info",
          gist: "www.github.com"
        },

      ]
    },
    javascript: {
      title: "javascript",
      data: [{
          title: "Variables",
          subtitle: "How to use javascript variables",
          gist: "www.github.com"
        },
        {
          title: "function",
          subtitle: "Basic javascript functions",
          gist: "www.github.com"
        },
        {
          title: "classes",
          subtitle: "EM6 classes vs prototype"
        }

      ]
    }

  }


  module.exports.data = Data;


}());
