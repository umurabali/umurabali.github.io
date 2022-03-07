import { wordList } from "./wordList.js";

let guessCount = 6;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = 'KULAK';

function initBoard() {
    let board = document.getElementById("game-container");

    for (let i = 0; i < guessCount; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            row.appendChild(box)
        }

        board.appendChild(row)
    }
}

initBoard()