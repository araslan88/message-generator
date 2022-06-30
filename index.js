const fs = require("fs");
const helper = require("./resources/helpers");

const messages = fs.readFileSync("./resources/message_snippets.txt", "utf-8");
let nouns = helper.getNouns(messages); 
let adjectives = helper.getAdjectives(messages);

console.log(`${nouns[Math.floor(Math.random()*nouns.length)]} is ${adjectives[Math.floor(Math.random()*adjectives.length)]}`);