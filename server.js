// const express = require('express');
// const { Server } = require('ws');
// const http = require('http');
// require('dotenv').config()

// const app = express();
// const server = http.createServer(app);
// const wss = new Server({ server });

// const OpenAI = require('openai').OpenAI;
// const openai = new OpenAI({
//     apiKey: process.env.OPEN_AI_API
// })

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

// async function main(data){
//     const res = await openai.chat.completions.create({
//           model: 'gpt-3.5-turbo',
//           messages: [
//               {
//                 role: 'system',
//                 content: 'Give me 19 words for kids based on the users topic. Dont use two words together; use only one word. Dont make more than 19 words. You must make at least 19 words. Do not add any dashes or lines to make words together. Do not make words more than 15 letters. 15 letters for each word is the max number.'
//               },
//               {
//                   role: 'user',
//                   content: data,
//               }
//           ]
//       })
  
//       const words = [];
  
//       const responseData = res.choices[0].message.content;
  
//       const lines = responseData.trim().split('\n');
//       lines.forEach(line => {
//           const cleanedLine = line.replace(/^\d+\.\s*/, '').trim();
//           const uppercasedLine = cleanedLine.toUpperCase();
//           words.push(uppercasedLine);
//       });
  
//       console.log(words);

//       return words

//   } 


// // wss.on('connection', (ws) => {


// //     ws.on('message', (data) => {
// //       const getString = data.toString();
// //       main(getString)

      
// //       /////i shud be here sending the json back to frontend grid and words

// //     });
// // });



// wss.on('connection', (ws) => {
//     console.log('New client connected');

//     // Handle incoming messages from clients
//     ws.on('message', async (data) => {
//         try {
//             const getString = data.toString();
//             console.log('Received from client:', getString);

//             // Call the main function to generate words
//             const words = await main(getString);

//             // Create the grid based on the generated words
//             const grid = createGrid(words);

//             // Send the grid and words back to the client
//             const response = {
//                 grid: grid,
//                 words: words
//             };
//             ws.send(JSON.stringify(response));
//         } catch (error) {
//             console.error('Error handling message:', error);
//         }
//     });


//     ws.on('close', () => {
//         console.log('Client disconnected');
//     });

//     // Handle WebSocket errors
//     ws.on('error', (error) => {
//         console.error('WebSocket error:', error);
//     });

// })





//  server.listen(3000, () => {
//      console.log('Server is running on http://localhost:3000');
//  });



















































// 

// const words = 
// [
//     "NODEJS", "EXPRESS", "HTML", "CSS", "JAVASCRIPT", "WEBSOCKET", "SPACE", "SEX", "MOON", "MAN", "NODEJS", "EXPRESS", "HTML", "CSS", "JAVASCRIPT", "WEBSOCKET", "SPACE", "SEX", "MOON", "MAN", 
// ];

// wss.on('connection', (ws) => {
//     const grid = createGrid();
//     ws.send(JSON.stringify({ grid, words }));
// });




////////////////////////////////////






















// const express = require('express');
// const { Server } = require('ws');
// const http = require('http');
// require('dotenv').config();
// const { OpenAI } = require('openai');

// const app = express();
// const server = http.createServer(app);
// const wss = new Server({ server });

// const openai = new OpenAI({
//     apiKey: process.env.OPEN_AI_API
// });

// const GRID_SIZE = 15;

// wss.on('connection', (ws) => {
//     console.log('Client connected');
//     ws.on('message', async (data) => {
//         try {
//             const getString = data.toString();
//             console.log('Received topic:', getString);
//             await main(getString, ws);
//         } catch (error) {
//             console.error('Error processing message:', error);
//             ws.send(JSON.stringify({ error: 'An error occurred while processing your request.' }));
//         }
//     });
// });

// async function main(data, ws) {
//     try {
//         const res = await openai.chat.completions.create({
//             model: 'gpt-3.5-turbo',
//             messages: [
//                 {
//                     role: 'system',
//                     content: 'Give me 19 words for kids based on the users topic. Do not use two words together; use only one word. Do not make more than 19 words. You must make at least 19 words. Do not add any dashes or lines to make words together. Do not make words more than 15 letters. 15 letters for each word is the max number.'
//                 },
//                 {
//                     role: 'user',
//                     content: data,
//                 }
//             ]
//         });

//         const words = parseWords(res.choices[0].message.content);
//         console.log('Processed words:', words);

//         const grid = createGrid(words);

//         console.log('Sending grid and words to client');
//         ws.send(JSON.stringify({ grid, words }));
//     } catch (error) {
//         console.error('Error generating completion:', error);
//         ws.send(JSON.stringify({ error: 'An error occurred while generating the word list.' }));
//     }
// }

// function parseWords(responseData) {
//     const words = [];
//     const lines = responseData.trim().split('\n').filter(line => line.trim() !== '');
//     lines.forEach(line => {
//         const cleanedLine = line.replace(/^\d+\.\s*/, '').trim();
//         if (cleanedLine) {
//             words.push(cleanedLine.toUpperCase());
//         }
//     });
//     return words;
// }

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

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });






























































////////////////////////////keep this here for baisc understanding

//////first recieve the input value of the form
/////then process that input value in the openai api
/////then create the array of words based off of the same thing as before with the words array


// const express = require('express');
// const { Server } = require('ws');
// const http = require('http');

// const app = express();
// const server = http.createServer(app);
// const wss = new Server({ server });

// app.use(express.static('public'));

// const GRID_SIZE = 15;
// const words = ["NODEJS", "EXPRESS", "HTML", "CSS", "JAVASCRIPT", "WEBSOCKET", "SARAHISGOOD"];

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

// function fillGridWithRandomLetters(grid) {
//     for (let row = 0; row < GRID_SIZE; row++) {
//         for (let col = 0; col < GRID_SIZE; col++) {
//             if (!grid[row][col]) {
//                 grid[row][col] = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random A-Z
//             }
//         }
//     }
// }

// wss.on('connection', (ws) => {
//     const grid = createGrid();
//     ws.send(JSON.stringify({ grid, words }));
// });

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });





/////////////////////////////////////////////////////////

















const express = require('express');
const { Server } = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new Server({ server });

app.use(express.static('public'));

const GRID_SIZE = 15;
const words = ["NODEJS", "EXPRESS", "HTML", "CSS", "JAVASCRIPT", "WEBSOCKET", "SARAHISGOOD", "DOESthiswork"];

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

// wss.on('connection', (ws) => {
//     const grid = createGrid();
//     ws.send(JSON.stringify({ grid, words }));
// });

wss.on("connection", (ws)=>{
    ws.on("message", async (message)=>{
        const topic = message.toString();
        console.log('Received topic from client:', topic);
        words.push(topic)
        console.log(words)

        const grid = createGrid();
        ws.send(JSON.stringify({ grid, words }), () => {
            ws.close(); // Close the connection after sending the data
        });
    })

    
})

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});











