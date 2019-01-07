(function () {
  let Data = {
    cpp: {
      title: "cpp",
      data: [
        {
          title: "Entry point",
          subtitle: "The location where a c/c++ program starts",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/7889f9af067c0019a0670fa8702c153b/raw/ad1ab4ebf6a2a9d2a68829ef5f70d87566005c0d/Entry%2520point.cpp"
        },
        {
          title: "Variables",
          subtitle: "C++ Primative variables",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/2165d6873d21cf60be1c8b82f3a00874/raw/1dae34492fc84e77a718891843e75940f1113108/Variables.cpp"
        },
        {
          title: "Pointers",
          subtitle: "Pointer points to the memory location of a variable",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/8685490f63aacf95775bb2930f74d605/raw/5445a81399f42e8f889f4907a4da26d04bfb98a9/Pointers.cpp"
        },
        {
          title: "Smart pointer",
          subtitle: "Pointers used to prevent memory leakage",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/57108fe2eaae4f3ecfbe9fa151fa7808/raw/f4e0b438245bcea5c8d65810343fca5e4d5c1ea1/Smart%2520pointer.cpp"
        },
        {
          title: "Arrays",
          subtitle: "An array is a series of elements of the same type placed in contiguous memory locations that can be individually referenced by adding an index to a unique identifier.",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/e05e3bf778b05e6f082ce559c2783071/raw/c64b53dd6907c2f67e85ba99e58276fa60e5adf9/Arrays.cpp"
        },
        {
          title: "The stack and the heap",
          subtitle: "Different ways to allocate memory",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/56cde478102c4a1469083d716065ed09/raw/2ce04d70f75962c4a712a9a4111692d6fad7b2c7/The%2520stack%2520and%2520the%2520heap.cpp"
        },
        {
          title: "Compiler and linker",
          subtitle: "The location where a c/c++ program starts",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/746c93e7882db13de36f5abe49f21c8f/raw/2a887f55d208c24188d708aebc4b68e670fcdcf0/Compiler%2520and%2520linker.cpp"
        },
        {
          title: "For Loop",
          subtitle: "A for loop can be run x amount of times",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/5416452ad63d12ceeb707e7a10db895a/raw/ca191792aac3f3f84d20de08e853513f3caccab6/For%2520Loop.cpp"
        },
        {
          title: "While",
          subtitle: "A loop that keeps running until a condition is true",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/8d9387c9b938db6e9114052396810bad/raw/e3faa7db3da22d967bfd84d37d1d3a20afdbbc4d/While.cpp"
        },
        {
          title: "If Statement",
          subtitle: "A statement for defining logic",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/47dc998232e1bb2537bd012245af4a61/raw/09ac4b05742eab591b9a0c42542586a94bcee2cc/If.cpp"
        },
        {
          title: "Tenary operator",
          subtitle: "This operator is a short hand notation of an if statement",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/ea2f0714420508549bcf8cfa9647ae79/raw/a4e372ef883037092ee94323de153d92280be6ea/Tenary%2520operator.cpp"
        },
        {
          title: "Logic Operators",
          subtitle: "Used for boolean expressions",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/13c248a42e42a3f5ba5635a204136d7a/raw/f360bdffd9e221e9da84e5a6e1c39eef89813a95/Logic%2520Operators.cpp"
        },
        {
          title: "Switch",
          subtitle: "Short hand notation for an if statement (only ==)",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/b162fde676635ab525ffd4aa81fd1551/raw/f34b4741ad23049c4f64bd3ac384aec39bc3a2f3/Switch.cpp"
        },
        {
          title: "Functions",
          subtitle: "Blocks of code which you can repeat",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/dc9eb289fdc24522c4ab65073ef37243/raw/c1d978263c3447250ea1facd7ce407c7fc484804/Functions.cpp"
        },
        {
          title: "Function return types",
          subtitle: "What we can return from functions",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/1d4a8331a6504f920a9bc5741a8d4ca2/raw/81c19cd18f06fa7459162bc16b4a6c16a519b425/Function%2520return%2520types.cpp"
        },
        {
          title: "Inline functions",
          subtitle: "Inline functions are functions that will be replaced as if it was normal code that never called a function",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/56674a90c62b598a3b3291c37c6d86b2/raw/675d4e41b947de592951652e51cfcab6a90d8eae/Inline%2520functions.cpp"
        },
        {
          title: "Function pointers",
          subtitle: "Pointers to the memory address of a function",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/387db19eeb9a69f7701fbea3ba74db32/raw/387a5345aea4919decf2a6611af90a5cec363e05/Function%2520pointers.cpp"
        },
        {
          title: "Lambdas",
          subtitle: "An anonymous function",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/00261cc516b0da9dc7d23dffd38b9f1c/raw/5737ca44214ea8a1fd8f6db274cbadd2b0ca8f23/lambdas.cpp"
        },
        {
          title: "Constant",
          subtitle: "How to make functions/variables etc constant",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/68d3625e8b1b2fb891f2df660be9b0d9/raw/c13c10d42807a70895080350958f228c64c962af/const.cpp"
        },
        {
          title: "Type Definition",
          subtitle: "Give a type an nickname",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/b122079d09ec8ac2699db59d9fccf21e/raw/8d3151baf33363add1801a73ace752c6c079772d/typedef.cpp"
        },
        {
          title: "Preprocessor",
          subtitle: "Commands that happen before compilation",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/b9ea9ff2f842d0e4302ffefb3c8443ed/raw/e0715c9fbaf09a36cc25836422a7f24cd8bc608a/preprocessor.cpp"
        },
        {
          title: "Enum",
          subtitle: "An enumerations of integers",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/9df35f8097e4ba492b953736ad71263c/raw/192eadfd09d4d852ba58b4a9a9b7a885b6d03ee2/Enum.cpp"
        },
        {
          title: "Struct",
          subtitle: "A struct is a container for multiple variables (used to make lists) by default everything is publicly visable",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/729d1e426cff20b4075b545c594f28ff/raw/4d4166a0f7c9867474d07ef250e5f56adc42c576/Struct.cpp"
        },
        {
          title: "Class",
          subtitle: "A class is a container for multiple variables (used to make objects)",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/08f3d6bccc407e53165a5ee9164ff503/raw/2a9472fc5d9e7d87a2b9747d8eaab21b9b2d5cbc/Class.cpp"
        },
        {
          title: "Header",
          subtitle: "Headers are used to include classes in other cpp files",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/c7e7d54120f58ea29ab22e2d55a28062/raw/8dcb094c925e76e6614150a304501d8e78ccc7a1/Header.cpp"
        },
        {
          title: "Static",
          subtitle: "Static denotes that the \'thing\' only exists once",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/3812434d4aed8732bb6f49522b859cb9/raw/b01dbf42f34be809b4bd39fd314362313df27255/Static.cpp"
        },
        {
          title: "Friend functions",
          subtitle: "A function that acts like it is a private member of class",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/ec43cb8d186517c387f005f2f44678dd/raw/4732aec0032204bbae7c5bf29216f4ab0ba1a9aa/Friend%2520functions.cpp"
        },
        {
          title: "Copy constructor",
          subtitle: "Constructor used to copy an object",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/81e174812d9715b2fbdaed9926d69768/raw/d272e2b3a45c9cc1e9b5e958df6ebf7b1cc05395/Copy%2520constructor.cpp"
        },
        {
          title: "Inheritance",
          subtitle: "If we have multiple classes sharing functions we use inheritance to put the commen functions in one super class",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/2a7164e09ec2c97765d175e5e3ed3154/raw/bd98071f3c6cc1acb7125424c01db1043f061472/inheritance.cpp"
        },
        {
          title: "Virtual functions (aka polymorphism)",
          subtitle: "Virtual functions are used when needing different behavior from a subclass while using the same function",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/7cbf5bf63e6910d1b775c298bc56d8ae/raw/ee37a680f5c849a4803c94b2ff7745a1b86e5ecd/Virtual%2520functions%2520(aka%2520polymorphism).cpp"
        },
        {
          title: "Interface",
          subtitle: "An interface is a template for a subclass on how to use it",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/a20ebc8a3534ab05ed8535718d140c10/raw/aa5f74a99363aded6d7adda69cccdf2d5e1d4a4b/Interface.cpp"
        },
        {
          title: "Operator overloading",
          subtitle: "This is normally used when you need to use an operator with a class you made (instead of making a regular function to improve readability)",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/b8139a92650a9331bce7640fed6a5ddb/raw/bd01a7b788787dff13fcdca7c802e29edb40bf65/operator%2520overloading.cpp"
        },
        {
          title: "Threading with mutex",
          subtitle: "Start multiple threads but lock them using a mutex to avoid multiple thread to use the same resource",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/3c97174972b45909102b934ed515e8b2/raw/d99c3d4d8f14c8fc764d3e0fc6d49044188ff09c/Threading%2520with%2520mutex.cpp"
        },
        {
          title: "Templates",
          subtitle: "Defining one class that can act as a template for multiple classes",
          gist: "https://aplearning.xyz/zeppelin/snippets/?F0xedb/b209b7f27047de6a545acb933b101432/raw/96804af43055d95bbed95419ccbcf8eeb82f83ca/Templates.cpp"
        }
      ]
    }
  }

  module.exports.data = Data;
}());
