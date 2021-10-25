Mixed Messages
==============
A Codecademy's Portfolio Project

Here's a Codecademy's Portfolio Project called *Mixed Message*. The goal of this portfolio project is to practice some JavaScript, Git and MarkDown fundamentals.

### General Information
I decided to implement a script that generates an absurd discussion between some of Ionesco's Rhinoceros play. 
:speech_balloon:
:left_speech_bubble:

### How does it work?
* `lines.js` contains an array for each caracter and each array contains all of the lines of a character;
* `main.js`contains the script itself;
* The script chooses randomly the firs character to speak;
* The characters then exchange alternatively randomly choosen lines one by one;
* Once a line has been output, its index is added to an array storring these indexes so they're not outputted again;
* The conversation *script* is assemble this way, line by line, and then outputted as a whole in the terminal;
* The script ends and the programm exits.

### Dependencies 
To run the files from your computer, you'll need Node.js v14+.

### Installation
* Download the files or clone the repository
* Make sure you have Node.js on your computer
* From the the directory where the files are, run the following in your bash terminal:
```
$ node main.js
```

### Features
#### Implemented
* A whole random (and absurd) conversation is generated and logged into the console each time you run the script;

#### Development ideas
* Use lodash's shuffle on an array of charactersLines indexes so every line can be outputted without an infinite loop and without the need for a counter that stops at 80% of accessible charactersLines
* Add a setTimeout with a random time so lines are logged to the console a bit more naturally like a chat...
* Do something similar by splitting charactersLines word by word and logging the words to the console one by one, like a natural conversation;
* Integrate the whole thing in a single web page for outputting the result in something more friendly than a terminal/console;

### License
GNU GPLv3