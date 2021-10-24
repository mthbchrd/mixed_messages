import { berengersLines, jeansLines } from "./lines";

// First, we declare a function that will output character lines instead of writing repeating code...
const spitLines = (characterIndex) => {
    let randomIndex;
    while (!randomIndex || outputtedLines[characterIndex].includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * charactersLines[characterIndex].length);
    }
    outputtedLines[characterIndex].push(randomIndex);
    console.log(`${characters[characterIndex]}: ${charactersLines[characterIndex][randomIndex]}`);
    characterIndex === 0 ? characterIndex = 1 : characterIndex = 0;
}

// Theses arrays store the characters and their lines. The order must be the same in this array as the charactersLines array
let characters = ["Berenger", "Jean"];
let charactersLines = [berengersLines, jeansLines];

// This next array stores two nested arrays, each contaning the indexes of the lines already outputed so they're not outputted twice. 
// The indexes of the nested arrays are the same as the characters and characterLines arrays
let outputtedLines = [[], []];

// Choosing randomly the first character to output a line
let currentIndex = Math.round(Math.random());

// Outputting lines to the console
while (outputtedLines[0].length() <= charactersLines[0].length() || outputtedLines[1].length() <= charactersLines[1].length()) {
    spitLines(currentIndex);
}

// We end the script and dialogue the same way Act I of the plys ends
console.log("JEAN and BERENGER: Well, of all things!");