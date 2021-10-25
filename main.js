import { berengersLines, jeansLines } from "./lines.js";


// First, we declare a function that will output character lines instead of writing repeating code...
const spitLines = (characterIndex) => {
    if (outputtedLines[characterIndex].length < charactersLines[characterIndex].length) {
        let randomIndex;
        while (!randomIndex || outputtedLines[characterIndex].includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * charactersLines[characterIndex].length);
        }
        outputtedLines[characterIndex].push(randomIndex);
        console.log(`${characters[characterIndex]}: ${charactersLines[characterIndex][randomIndex]}`);
    }
    currentCharacterIndex === 0 ? currentCharacterIndex = 1 : currentCharacterIndex = 0;
}

// Theses arrays store the characters and their lines. The order must be the same in this array as the charactersLines array
let characters = ["BERENGER", "JEAN"];
let charactersLines = [berengersLines, jeansLines];

// This next array stores two nested arrays, each contaning the indexes of the lines already outputed so they're not outputted twice. 
// The indexes of the nested arrays are the same as the characters and characterLines arrays
let outputtedLines = [[], []];

// Choosing randomly the first character to output a line
let currentCharacterIndex = Math.round(Math.random());

// The next two variables ensure the script ends when about 80% of both charactersLines arrays.
// These had to be implemented after the tests on the first version of the script revealed it was getting in a near infinite loop when 
// most of the charactersLines array had been outputted...
let counter = 0;
let max = 0.8 * charactersLines[0].length * 2;

// Outputting lines to the console
while (counter <= max && (outputtedLines[0].length <= charactersLines[0].length || outputtedLines[1].length <= charactersLines[1].length)) {
    spitLines(currentCharacterIndex);
    counter++;
}

// We end the script and dialogue the same way Act I of the plys ends
console.log("JEAN and BERENGER: Well, of all things!");