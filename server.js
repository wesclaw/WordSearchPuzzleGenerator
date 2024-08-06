// const express = require('express');
// const { Server } = require('ws');
// const http = require('http');


// const app = express();
// const server = http.createServer(app);
// const wss = new Server({ server });
// require('dotenv').config()
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


////////////////////////////////////













































































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













////////////////////////this one add words based on form. it will add the words used in the form


// require('dotenv').config()
// const express = require('express');
// const { Server } = require('ws');
// const http = require('http');

// const app = express();
// const server = http.createServer(app);
// const wss = new Server({ server });

// const OpenAI = require('openai').OpenAI;
// const openai = new OpenAI({
//     apiKey: process.env.OPEN_AI_API
// })

// app.use(express.static('public'));

// const GRID_SIZE = 15;
// // const words = ["NODEJS", "EXPRESS", "HTML", "CSS", "JAVASCRIPT", "WEBSOCKET", "SARAHISGOOD", "DOESthiswork"];




// const words = []

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

// // wss.on('connection', (ws) => {
// //     const grid = createGrid();
// //     ws.send(JSON.stringify({ grid, words }));
// // });

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



//     wss.on("connection", (ws)=>{
//         ws.on("message", async (message)=>{
//             const topic = message.toString();
//             console.log('Received topic from client:', topic);
//             words.push(topic)
//             console.log(words)

//             const grid = createGrid();
//             ws.send(JSON.stringify({ grid, words }), () => {
//                 ws.close(); // Close the connection after sending the data
//             });
//         })

        
//     })

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });



////////////////////////////////////////////////////////















//////form sends the input value to the //////go back to this one




// const express = require('express');
// const { Server } = require('ws');
// const http = require('http');

// const app = express();
// const server = http.createServer(app);
// const wss = new Server({ server });

// app.use(express.static('public'));

// const GRID_SIZE = 15;

// const words = ["NODEJS", "EXPRESS", "HTML", "CSS", "JAVASCRIPT", "WEBSOCKET", "SARAHISGOOD", "WHYdoesthiswork"];

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










































// Steps Breakdown:
// Client to Server (HTTP Request):

// The client sends the input value (topic) to the server using an HTTP POST request.
// Server to OpenAI API (HTTP Request):

// The server receives the input value and makes an HTTP request to the OpenAI API to generate words based on the topic.
// Server Processing:

// The server processes the words received from the OpenAI API, creates the word grid, and prepares the data to send back to the client.
// Server to Client (HTTP Response):

// The server sends the generated word grid and words back to the client as an HTTP response.
// Detailed Steps with HTTP Usage:
// Client to Server (Step 1):

// The client (webpage) sends an HTTP POST request to the server with the input value (topic).
// Example:

// Client uses Axios to send a POST request: axios.post('/generate', { topic }).
// Server to OpenAI API (Step 2):

// The server receives the topic from the client.
// The server then makes an HTTP POST request to the OpenAI API to generate words based on the topic.
// Example:

// Server uses Axios or another HTTP client to send a POST request to OpenAI API: axios.post('https://api.openai.com/v1/engines/...', requestData).
// Server Processing (Step 3):

// The server processes the words received from the OpenAI API.
// The server creates the word grid using these words.
// Server to Client (Step 4):

// The server sends the generated word grid and words back to the client as an HTTP response.
// Example:

// Server sends back a JSON response: res.json({ grid, words }).
// Summary:
// HTTP Requests:
// Client to Server: To send the topic.
// Server to OpenAI: To get the words based on the topic.
// HTTP Responses:
// Server to Client: To send back the grid and words.







const express = require('express');
const { Server } = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);

require('dotenv').config()
const axios = require('axios');
const OpenAI = require('openai').OpenAI;
const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API
})
const cors = require('cors');
app.use(cors());

app.use(express.json());
// Middleware to parse URL-encoded bodies (if you also need this)
app.use(express.urlencoded({ extended: true }));
// 

app.use(express.static('public'));

const GRID_SIZE = 15;

// const words = ["NODEJS", "EXPRESS", "HTML", "CSS", "JAVASCRIPT", "WEBSOCKET", "SARAHISGOOD", "WHYdoesthiswork"];

// 
const words = []
async function fetchWordsFromOpenAI(topic) {
    try {
        const res = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'Give me 19 words for kids based on the user\'s topic. Don\'t use two words together; use only one word. Don\'t make more than 19 words. You must make at least 19 words. Do not add any dashes or lines to make words together. Do not make words more than 15 letters. 15 letters for each word is the max number.'
                },
                {
                    role: 'user',
                    content: topic,
                }
            ]
        });

        const responseData = res.choices[0].message.content;
        const lines = responseData.trim().split('\n');
        const newWords = lines.map(line => line.replace(/^\d+\.\s*/, '').trim().toUpperCase());

        // Clear the existing words array and push new words
        words.length = 0; // Clear the array
        words.push(...newWords); // Add new words to the array
        console.log(words)
        return newWords;
    } catch (error) {
        console.error('Error fetching words from OpenAI:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
}
// 

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

app.post('/generate', async (req, res) => {
    const topic = req.body.topic;

    try {
        // Fetch words from OpenAI
        const newWords = await fetchWordsFromOpenAI(topic);
        words.splice(0, words.length, ...newWords); // Replace the existing words with new words

        // Generate grid with new words
        const grid = createGrid();

        // Send grid and words back to client
        console.log('Sending data to client:', { grid, words });
        res.json({ grid, words });
    } catch (error) {
        console.error('Error generating words:', error);
        res.status(500).send('Error generating words');
    }
});


////why call it two times both in /data and in /generate
app.get('/data', (req, res) => {
    try {
        const grid = createGrid();
        res.json({ grid, words });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});
// 


server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});








