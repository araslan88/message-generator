const fs = require("fs");
let messages = "df";



fs.readFile("./resources/message_snippets.txt", (err, data) => {
    if (err) {
        //console.log(err);
        console.log(err);
    }
    //console.log(data.toString());
    messages = data.toString();
});

console.log(messages);