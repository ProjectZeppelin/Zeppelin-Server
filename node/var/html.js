(function () {
  let Data = {
    html: {
      title: "html",
      data: [{
          title: "Template",
          subtitle: "Always use this template",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/bb344fa5bfe4f6764737569ba26eb5f1/raw/8f034890c27f44e6783be2c31cf60c3782fb4f46/Template.html"
        },
        {
          title: "External CSS",
          subtitle: "Link an external css file",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/103e6224f3f30e2f372a736d9062953f/raw/e473483c5ac6f6037cea600f607077c370a9a8d3/External%2520CSS.html"
        },
        {
          title: "External Script",
          subtitle: "Link an external js file",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/dadaf4afc4e7fb8f3b5d87e76feb91d3/raw/84da6d324489eda19b887843181d8ed44e02f778/External%2520Script.html"
        },
        {
          title: "Element Class",
          subtitle: "A non-unique class for an element, used to target multiple elements in css",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/d49a50ea195cc4050cb396c2f77adedf/raw/2c6747efbd4bd22c9bbb114255ff8373aab1ea3c/Element%2520Class.html"
        },
        {
          title: "Element Id",
          subtitle: "A unique id for an element",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/a58298b101843ac2d43cf79d0a34b96c/raw/5009c1051f8f8bc9e4d192932b56943c0b7a64dc/Element%2520Id.html"
        },
        {
          title: "Div",
          subtitle: "A container for multiple child elements",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/f28484c4c3bfc51d3b4798823ddd3fa9/raw/352d3829231099aef490c8c43fa497a01a5c7f81/Div.html"
        },
        {
          title: "Span",
          subtitle: "A div like element for inline text",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/96670c53e079553c7865fb8026a08e81/raw/f5dd5eec51212b1bcce7d11ab84a698227100ede/Span.html"
        },
        {
          title: "Heading",
          subtitle: "Display titles, subtitles...",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/8a130e5970d79539374973869a9fa680/raw/c45975bab634294639e93b6b366489cb2528d35c/Heading.html"
        },
        {
          title: "Paragraph",
          subtitle: "This tag is ment for longer pieces of text",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/90acc608497457b541b52b4bc5ca0e64/raw/e5c8fb1fa485b47e9a58e88fbb94951549ea0949/Paragraph.html"
        },
        {
          title: "Anchor",
          subtitle: "This tag links to an other page",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/b532034f311fc0418e32b4e24f5d0c25/raw/0715c8b348e9cdd5a9b90e7187e46629518b690f/Anchor.html"
        },
        {
          title: "Unorderd list",
          subtitle: "This makes an unordered list, use this when making menus",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/411b29b3125104a61eba2559c9943981/raw/ca0d43880bc49f62a26cec35f4d81f548b8beddc/Unorderd%2520list.html"
        },
        {
          title: "Orderd list",
          subtitle: "This makes an orderd list with auto incrementing numbers",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/105582ec34c47fed11038fb7c8deda12/raw/857a78067c7813dd071f42bd5ec1f37e82e36212/Orderd%2520list.html"
        },
        {
          title: "Picture",
          subtitle: "Load a picture into an HTML page.",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/c8910ac479cc112b9059032fee860b8e/raw/ec02f8e1fa7cc6b8b6995aadd9133e530104fd44/Picture.html"
        },
        {
          title: "Header",
          subtitle: "This indicates the top of a page",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/bc27c9efcf2f3e26db00f5f135784b1e/raw/35bce9e17030308a8922788078b42dee600ad7c4/Header.html"
        },
        {
          title: "Main",
          subtitle: "This indicates the main section of a page",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/d4c02bc4453ab35cad3917cdc4241ed2/raw/9f60dbc98f43299fa0611573a426d568dc9c5edf/Main.html"
        },
        {
          title: "Footer",
          subtitle: "This indicates the foot section of a page",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/5c4a48f52e36b7b9e965320eae569ea5/raw/7cbc6ba6a3b3a9a798d7a379e8eb474cb7740061/Footer.html"
        },
        {
          title: "Navigation",
          subtitle: "This indicates the navigation of a page",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/ed185e7c95290f228d5c48713da4c7ce/raw/a6395663eb25092423c9cecdc3f5d7c2e86be916/Navigation.html"
        },
        {
          title: "Bold",
          subtitle: "Prints text bold",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/da69dc746b4645aaff43cc81b616eca5/raw/7731d0b989df9de455d1407a18e93e64d76d4857/Bold.html"
        },
        {
          title: "Cursive",
          subtitle: "Prints text cursive",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/a5d07df41b54f0b6dc40b7fb782145d3/raw/022130e364612d3c8c50af6e1beeed75389864ea/Cursive.html"
        },
        {
          title: "Divider",
          subtitle: "Draws a horizontal ruler over the width of it's parent element",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/e78280e2fde5ac71737a8998757f47fe/raw/808fb9cc312e4ec17c4dde0ab41cf27bc9984c1d/Divider.html"
        },
        {
          title: "Input",
          subtitle: "Let's users input text",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/da6921557236086fd39417f754addf1b/raw/f1935ff75ff4fdff73de9fc349a53c5216203f8b/Input.html"
        },
        {
          title: "Form",
          subtitle: "Groups inputs together. When a form is submitted, all inputs within this form will be sent.",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/1f89cc2fe4925ec7b1c4bd186a19ce1c/raw/c3dcfe4b4fdf6920dac77d3ce2b28f481c05e1ea/Form.html"
        },
        {
          title: "Table",
          subtitle: "This displays a table.",
          gist: "https://aplearning.xyz/zeppelin/snippets/?snippet=F0xedb/38f292002f55867605ebfa9bf94949da/raw/5d6117e87e645e0096bd336250d97900c64a8135/Table.html"
        },
      ]
    }
  }

  module.exports.data = Data;
}());
