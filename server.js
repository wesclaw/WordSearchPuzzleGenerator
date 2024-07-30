// const express = require('express');
// const { Server } = require('ws');
// const http = require('http');
// require('dotenv').config()

// const app = express();
// const server = http.createServer(app);
// const wss = new Server({ server });

// // 

// // const words = 
// // [
// //     "NODEJS", "EXPRESS", "HTML", "CSS", "JAVASCRIPT", "WEBSOCKET", "SPACE", "SEX", "MOON", "MAN", "NODEJS", "EXPRESS", "HTML", "CSS", "JAVASCRIPT", "WEBSOCKET", "SPACE", "SEX", "MOON", "MAN", 
// // ];



// const OpenAI = require('openai').OpenAI;
// const openai = new OpenAI({
//     apiKey: process.env.OPEN_AI_API
// })

// // 
// wss.on('connection', (ws) => {
//     ws.on('message', (data) => {
//       const getString = data.toString();
//       console.log(getString)
//       main(getString)
//     });
//   });

// // 

// async function main(data, ws){
//   const res = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo',
//         messages: [
//             {
//                 role: 'system',
//                 content: 'Give me 19 words for kids based on the users topic. Dont use two words together; use only one word. Dont make more than 19 words. You must make at least 19 words. Do not add any dashes or lines to make words together. Do not make words more than 15 letters. 15 letters for eadch word is the max number.'
//             },
//             {
//                 role: 'user',
//                 content: data,
//             }
//         ]
//     })

//     const words = [];

//     const responseData = res.choices[0].message.content;

//     const lines = responseData.trim().split('\n');
//     lines.forEach(line => {
//         const cleanedLine = line.replace(/^\d+\.\s*/, '').trim();
//         const uppercasedLine = cleanedLine.toUpperCase();
//         words.push(uppercasedLine);
//     });

//     console.log(words);

//     // 

//     createGrid(words)

// } 

// const GRID_SIZE = 15;

// function createGrid(words) {

//     const grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(''));
//     for (const word of words) {
//         placeWordInGrid(grid, word);
//     }
//     fillGridWithRandomLetters(grid);
//     return grid;
// }

// function placeWordInGrid(grid, word) {
//     const directions = [[1, 0], [0, 1], [1, 1]];
//     let placed = false;
//     while (!placed) {
//         const direction = directions[Math.floor(Math.random() * directions.length)];
//         const row = Math.floor(Math.random() * GRID_SIZE);
//         const col = Math.floor(Math.random() * GRID_SIZE);
//         if (canPlaceWord(grid, word, row, col, direction)) {
//             for (let i = 0; i < word.length; i++) {
//                 grid[row + i * direction[0]][col + i * direction[1]] = word[i];
//             }
//             placed = true;
//         }
//     }
// }

// function canPlaceWord(grid, word, row, col, direction) {
//     for (let i = 0; i < word.length; i++) {
//         const newRow = row + i * direction[0];
//         const newCol = col + i * direction[1];
//         if (newRow >= GRID_SIZE || newCol >= GRID_SIZE || (grid[newRow][newCol] && grid[newRow][newCol] !== word[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// function fillGridWithRandomLetters(grid) {
//     for (let row = 0; row < GRID_SIZE; row++) {
//         for (let col = 0; col < GRID_SIZE; col++) {
//             if (!grid[row][col]) {
//                 grid[row][col] = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random A-Z
//             }
//         }
//     }
// }

// // wss.on('connection', (ws) => {
// //     const grid = createGrid();
// //     ws.send(JSON.stringify({ grid, words }));
// // });

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });














































// const express = require('express');
// const { Server } = require('ws');
// const http = require('http');
// require('dotenv').config()

// const app = express();
// const server = http.createServer(app);
// const wss = new Server({ server });
// const OpenAI = require('openai').OpenAI;

// const GRID_SIZE = 15;

// const openai = new OpenAI({
//     apiKey: process.env.OPEN_AI_API
// })

// // 
// wss.on('connection', (ws) => {
//     ws.on('message', (data) => {
//       const getString = data.toString();
//       console.log(getString)
//       main(getString, ws)
//       createGrid()
//     });
//   });

// // 

// async function main(data, ws){
//   const res = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo',
//         messages: [
//             {
//                 role: 'system',
//                 content: 'Give me 19 words for kids based on the users topic. Dont use two words together; use only one word. Dont make more than 19 words. You must make at least 19 words. Do not add any dashes or lines to make words together. Do not make words more than 15 letters. 15 letters for eadch word is the max number.'
//             },
//             {
//                 role: 'user',
//                 content: data,
//             }
//         ]
//     })

//     const words = [];

//     const responseData = res.choices[0].message.content;

//     const lines = responseData.trim().split('\n');
//     lines.forEach(line => {
//         const cleanedLine = line.replace(/^\d+\.\s*/, '').trim();
//         const uppercasedLine = cleanedLine.toUpperCase();
//         words.push(uppercasedLine);
//     });
//     console.log(words)
// } 


// function createGrid() {

//     const grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(''));
//     for (const word of words) {
//         placeWordInGrid(grid, word);
//     }
//     fillGridWithRandomLetters(grid);
//     return grid;
// }

// function placeWordInGrid(grid, word) {
//     const directions = [[1, 0], [0, 1], [1, 1]];
//     let placed = false;
//     while (!placed) {
//         const direction = directions[Math.floor(Math.random() * directions.length)];
//         const row = Math.floor(Math.random() * GRID_SIZE);
//         const col = Math.floor(Math.random() * GRID_SIZE);
//         if (canPlaceWord(grid, word, row, col, direction)) {
//             for (let i = 0; i < word.length; i++) {
//                 grid[row + i * direction[0]][col + i * direction[1]] = word[i];
//             }
//             placed = true;
//         }
//     }
// }

// function canPlaceWord(grid, word, row, col, direction) {
//     for (let i = 0; i < word.length; i++) {
//         const newRow = row + i * direction[0];
//         const newCol = col + i * direction[1];
//         if (newRow >= GRID_SIZE || newCol >= GRID_SIZE || (grid[newRow][newCol] && grid[newRow][newCol] !== word[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// function fillGridWithRandomLetters(grid, ws) {
//     for (let row = 0; row < GRID_SIZE; row++) {
//         for (let col = 0; col < GRID_SIZE; col++) {
//             if (!grid[row][col]) {
//                 grid[row][col] = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random A-Z
//             }
//         }
//     }
// }

// // wss.on('connection', (ws) => {
// //     const grid = createGrid();
// //     ws.send(JSON.stringify({ grid, words }));
// // });

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
























///////this code only works once, when the page is reloaded, no grid and words are being made

const express = require('express');
const { Server } = require('ws');
const http = require('http');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const wss = new Server({ server });

const OpenAI = require('openai').OpenAI;
const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API
});

const GRID_SIZE = 15;

wss.on('connection', (ws) => {
    ws.on('message', async (data) => {
        const getString = data.toString();
        console.log(`Received topic: ${getString}`);

        try {
            // Fetch words from OpenAI
            const words = await fetchWordsFromOpenAI(getString);

            // Create the grid
            const grid = createGrid(words);

            // Send the grid and words to the client
            ws.send(JSON.stringify({ grid, words }));
        } catch (error) {
            console.error('Error processing request:', error);
            ws.send(JSON.stringify({ error: 'Failed to process the request' }));
        }
    });
});

// Function to fetch words from OpenAI
async function fetchWordsFromOpenAI(topic) {
    const res = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'Give me 19 words for kids based on the users topic. Dont use two words together; use only one word. Dont make more than 19 words. You must make at least 19 words. Do not add any dashes or lines to make words together. Do not make words more than 15 letters. 15 letters for each word is the max number.'
            },
            {
                role: 'user',
                content: topic,
            }
        ]
    });

    const responseData = res.choices[0].message.content;
    const lines = responseData.trim().split('\n');
    return lines.map(line => line.replace(/^\d+\.\s*/, '').trim().toUpperCase());
}

// Function to create the grid
function createGrid(words) {
    const grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(''));

    words.forEach(word => placeWordInGrid(grid, word));

    fillGridWithRandomLetters(grid);
    return grid;
}

// Function to place a word in the grid
function placeWordInGrid(grid, word) {
    const directions = [[1, 0], [0, 1], [1, 1]]; // Right, Down, Diagonal
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

// Function to check if a word can be placed in the grid
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

// Function to fill the grid with random letters
function fillGridWithRandomLetters(grid) {
    for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
            if (!grid[row][col]) {
                grid[row][col] = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random A-Z
            }
        }
    }
}

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});