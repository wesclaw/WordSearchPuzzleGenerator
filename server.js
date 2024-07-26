const express = require('express');
const { Server } = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new Server({ server });

app.use(express.static('public'));

const GRID_SIZE = 15;
const words = 
[
    "NODEJS", "EXPRESS", "HTML", "CSS", "JAVASCRIPT", "WEBSOCKET", "SPACE", "SEX", "MOON", "MAN", "NODEJS", "EXPRESS", "HTML", "CSS", "JAVASCRIPT", "WEBSOCKET", "SPACE", "SEX", "MOON", "MAN", 
];

function createGrid() {
    const grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(''));
    for (const word of words) {
        placeWordInGrid(grid, word);
    }
    fillGridWithRandomLetters(grid);
    return grid;
}

function placeWordInGrid(grid, word) {
    const directions = [[1, 0], [0, 1], [1, 1]];
    let placed = false;
    while (!placed) {
        const direction = directions[Math.floor(Math.random() * directions.length)];
        const row = Math.floor(Math.random() * GRID_SIZE);
        const col = Math.floor(Math.random() * GRID_SIZE);
        if (canPlaceWord(grid, word, row, col, direction)) {
            for (let i = 0; i < word.length; i++) {
                grid[row + i * direction[0]][col + i * direction[1]] = word[i];
            }
            placed = true;
        }
    }
}

function canPlaceWord(grid, word, row, col, direction) {
    for (let i = 0; i < word.length; i++) {
        const newRow = row + i * direction[0];
        const newCol = col + i * direction[1];
        if (newRow >= GRID_SIZE || newCol >= GRID_SIZE || (grid[newRow][newCol] && grid[newRow][newCol] !== word[i])) {
            return false;
        }
    }
    return true;
}

function fillGridWithRandomLetters(grid) {
    for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
            if (!grid[row][col]) {
                grid[row][col] = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random A-Z
            }
        }
    }
}

wss.on('connection', (ws) => {
    const grid = createGrid();
    ws.send(JSON.stringify({ grid, words }));
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
