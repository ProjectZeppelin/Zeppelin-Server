(function () {

    let Data = {
        timeout: 5000,
        language1: {
            title: "Language 1",
            url: "/get/lan1",
            children: [{
                    title: "part 1",
                    url: "/get/lan1/part1",
                    children: []
                },
                {
                    title: "part 2",
                    url: "/get/lan1/part2",
                    children: []
                },
                {
                    title: "part 3",
                    url: "/get/lan1/part3",
                    children: []
                },
            ]
        },
        language2: {
            title: "Language 2",
            url: "/get/lan2",
            children: [{
                    title: "part 1",
                    url: "/get/lan2/part1",
                    children: []
                },
                {
                    title: "part 2",
                    url: "/get/lan2/part2",
                    children: []
                },
                {
                    title: "part 3",
                    url: "/get/lan3/part3",
                    children: [{
                            title: "part 3 section 1",
                            url: "/get/lan2/part3/section1",
                            children: []
                        },
                        {
                            title: "part 3 section 2",
                            url: "/get/lan2/part3/section2",
                            children: []
                        },
                    ]
                },
            ]
        }
    }

    module.exports.data = Data;


}());