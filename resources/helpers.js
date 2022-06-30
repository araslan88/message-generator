const test = () => "Test";

const getNouns = (message_snippets) => {
    let nounsString = message_snippets.slice(0, message_snippets.indexOf("adjectives:"));
    nounsString = nounsString.replace("nouns:", "");
    nounsString = nounsString.replace(/(\r\n|\n|\r)/gm, "");
    let nounsArray = nounsString.split(",");
    return nounsArray;
}

const getAdjectives = (message_snippets) => {
    let adjectivesString = message_snippets.slice(message_snippets.indexOf("adjectives:"));
    adjectivesString = adjectivesString.replace("adjectives:", "");
    adjectivesString = adjectivesString.replace(/(\r\n|\n|\r)/gm, "");
    let adjectivesArray = adjectivesString.split(",");
    return adjectivesArray;
}

module.exports = {test, getNouns, getAdjectives};