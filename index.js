const fs = require("fs");

let messages = fs.readFileSync("./resources/message_snippets.txt", "utf-8");

console.log(messages);