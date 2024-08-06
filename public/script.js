// const gridElement = document.getElementById('word-search-grid');
// const wordsElement = document.querySelector('.words');
// const pdfPaperElement = document.querySelector('.pdf_paper');

// const ws = new WebSocket('ws://localhost:3000');

// // 
// const form = document.getElementById('form')
// const input = document.querySelector('.input')

// ws.onopen = () => {
//     console.log('WebSocket connection opened');
// };

// // form.addEventListener('submit', e=>{
// //     e.preventDefault()
// //     const getTopicData = input.value
// //     input.value = ""
// //     console.log(getTopicData)
// //     ws.send(getTopicData);
// //    const moduleContainer = document.querySelector('.module-container')
// //    moduleContainer.remove()
// // })


// // ws.onmessage = (event) => {
// //     // console.log(event.data);

// //     // const data = JSON.parse(event.data);
// //     // const grid = data.grid;
// //     // const words = data.words;

// //     // renderGrid(grid);
// //     // renderWords(words);
// // }

// // ws.onmessage = (event) => {
    
// //     const data = JSON.parse(event.data);
// //     const grid = data.grid;
// //     const words = data.words;

// //     ///////find out why no console log here in clientside
// //     console.log(data)

// //     console.log(words)
// //     console.log(grid)

// //     renderGrid(grid);
// //     renderWords(words);

    
// // };

// function renderGrid(grid) {
//     gridElement.innerHTML = '';
//     for (const row of grid) {
//         for (const cell of row) {
//             const cellElement = document.createElement('div');
//             cellElement.className = 'cell';
//             cellElement.textContent = cell;
//             gridElement.appendChild(cellElement);
//         }
//     }
// }



// function renderWords(words) {
//     wordsElement.innerHTML = ''; // Clear previous content
//     words.forEach((word) => {
//         const wordElement = document.createElement('span');
//         // wordElement.textContent = word;
//         wordElement.innerHTML = `<p class="word-style">${word}</p>`
//         wordElement.style.color = 'black';
//         // wordElement.style.marginRight = '15px'; 
//         wordElement.style.display = 'inline-block'; 
//         wordsElement.appendChild(wordElement);
//     });
// }

// const lowerCaseOrUpperCaseBtn = document.getElementById('lowerCaseOrUpperCaseBtn');

// function changeTextCase() {
//     const cells = document.querySelectorAll('.cell');
//     const words = document.querySelectorAll('.word-style');
//     let allLowerCase = true;

//     cells.forEach((cell) => {
//         if (cell.textContent !== cell.textContent.toLowerCase()) {
//             allLowerCase = false;
//         }
//     });

//     words.forEach((word) => {
//         if (word.textContent !== word.textContent.toLowerCase()) {
//             allLowerCase = false;
//         }
//     });

//     if (allLowerCase) {
//         cells.forEach((cell) => {
//             cell.textContent = cell.textContent.toUpperCase();
//         });
//         words.forEach((word) => {
//             word.textContent = word.textContent.toUpperCase();
//         });
//         lowerCaseOrUpperCaseBtn.textContent = 'lowercase';
//     } else {
//         cells.forEach((cell) => {
//             cell.textContent = cell.textContent.toLowerCase();
//         });
//         words.forEach((word) => {
//             word.textContent = word.textContent.toLowerCase();
//         });
//         lowerCaseOrUpperCaseBtn.textContent = 'UPPERCASE';
//     }
// }

// lowerCaseOrUpperCaseBtn.addEventListener('click', changeTextCase);

// function adjustPdfPaperSize() {
//     // Define A4 dimensions in mm
//     const A4_WIDTH_MM = 210;
//     const A4_HEIGHT_MM = 297;

//     // Calculate dimensions based on viewport size
//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight;

//     // Aspect ratio for A4
//     const aspectRatio = A4_WIDTH_MM / A4_HEIGHT_MM;

//     // Adjust dimensions based on viewport size while maintaining aspect ratio
//     if (viewportWidth / viewportHeight > aspectRatio) {
//         pdfPaperElement.style.width = `${(viewportHeight * aspectRatio)}px`;
//         pdfPaperElement.style.height = `${viewportHeight}px`;
//     } else {
//         pdfPaperElement.style.width = `${viewportWidth}px`;
//         pdfPaperElement.style.height = `${(viewportWidth / aspectRatio)}px`;
//     }
  
// }

// document.getElementById('downloadPdf').addEventListener('click', async () => {
//     adjustPdfPaperSize();  // Adjust size before generating PDF

//     const spinIcon = document.querySelector('.spinIcon')
    
//     spinIcon.src = '/icons/spin.gif'
    
//     const element = document.querySelector('.pdf_paper');

//     const options = {
//         margin: [0, 0], // Margins around the content
//         filename: 'word-search-puzzle.pdf', // Name of the generated PDF file
//         image: { type: 'jpeg', quality: 0.98 }, // Image quality and type
//         html2canvas: { scale: 4 }, // Scale factor for better quality
//         jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // PDF format
//     };

//     try {
//         // Generate the PDF as a Blob
//         const pdfBlob = await new Promise((resolve, reject) => {
//             html2pdf().from(element).set(options).outputPdf('blob').then(resolve).catch(reject);
//         });

//         // Create a Blob URL and open it in a new tab
//         const blobUrl = URL.createObjectURL(pdfBlob);
//         window.open(blobUrl, '_blank');
//     } catch (error) {
//         console.error('Error generating PDF:', error);
//     }

//     spinIcon.src = '/icons/print.png'
// });

// // Call adjustPdfPaperSize on load and resize
// window.addEventListener('load', adjustPdfPaperSize);
// window.addEventListener('resize', adjustPdfPaperSize);

// resetBtn.addEventListener('click', e=>{
//     window.location.reload()
// })




















































// const gridElement = document.getElementById('word-search-grid');
// const wordsElement = document.querySelector('.words');
// const pdfPaperElement = document.querySelector('.pdf_paper');

// const ws = new WebSocket('ws://localhost:3000');

// const form = document.getElementById('form')
// const input = document.querySelector('.input')

// ws.onopen = () => {
//     console.log('WebSocket connection opened');
// };


// function renderGrid(grid) {
//     gridElement.innerHTML = '';
//     for (const row of grid) {
//         for (const cell of row) {
//             const cellElement = document.createElement('div');
//             cellElement.className = 'cell';
//             cellElement.textContent = cell;
//             gridElement.appendChild(cellElement);
//         }
//     }
// }



// function renderWords(words) {
//     wordsElement.innerHTML = ''; // Clear previous content
//     words.forEach((word) => {
//         const wordElement = document.createElement('span');
//         // wordElement.textContent = word;
//         wordElement.innerHTML = `<p class="word-style">${word}</p>`
//         wordElement.style.color = 'black';
//         // wordElement.style.marginRight = '15px'; 
//         wordElement.style.display = 'inline-block'; 
//         wordsElement.appendChild(wordElement);
//     });
// }

// const lowerCaseOrUpperCaseBtn = document.getElementById('lowerCaseOrUpperCaseBtn');

// function changeTextCase() {
//     const cells = document.querySelectorAll('.cell');
//     const words = document.querySelectorAll('.word-style');
//     let allLowerCase = true;

//     cells.forEach((cell) => {
//         if (cell.textContent !== cell.textContent.toLowerCase()) {
//             allLowerCase = false;
//         }
//     });

//     words.forEach((word) => {
//         if (word.textContent !== word.textContent.toLowerCase()) {
//             allLowerCase = false;
//         }
//     });

//     if (allLowerCase) {
//         cells.forEach((cell) => {
//             cell.textContent = cell.textContent.toUpperCase();
//         });
//         words.forEach((word) => {
//             word.textContent = word.textContent.toUpperCase();
//         });
//         lowerCaseOrUpperCaseBtn.textContent = 'lowercase';
//     } else {
//         cells.forEach((cell) => {
//             cell.textContent = cell.textContent.toLowerCase();
//         });
//         words.forEach((word) => {
//             word.textContent = word.textContent.toLowerCase();
//         });
//         lowerCaseOrUpperCaseBtn.textContent = 'UPPERCASE';
//     }
// }

// lowerCaseOrUpperCaseBtn.addEventListener('click', changeTextCase);

// function adjustPdfPaperSize() {
//     // Define A4 dimensions in mm
//     const A4_WIDTH_MM = 210;
//     const A4_HEIGHT_MM = 297;

//     // Calculate dimensions based on viewport size
//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight;

//     // Aspect ratio for A4
//     const aspectRatio = A4_WIDTH_MM / A4_HEIGHT_MM;

//     // Adjust dimensions based on viewport size while maintaining aspect ratio
//     if (viewportWidth / viewportHeight > aspectRatio) {
//         pdfPaperElement.style.width = `${(viewportHeight * aspectRatio)}px`;
//         pdfPaperElement.style.height = `${viewportHeight}px`;
//     } else {
//         pdfPaperElement.style.width = `${viewportWidth}px`;
//         pdfPaperElement.style.height = `${(viewportWidth / aspectRatio)}px`;
//     }
  
// }

// document.getElementById('downloadPdf').addEventListener('click', async () => {
//     adjustPdfPaperSize();  // Adjust size before generating PDF

//     const spinIcon = document.querySelector('.spinIcon')
    
//     spinIcon.src = '/icons/spin.gif'
    
//     const element = document.querySelector('.pdf_paper');

//     const options = {
//         margin: [0, 0], // Margins around the content
//         filename: 'word-search-puzzle.pdf', // Name of the generated PDF file
//         image: { type: 'jpeg', quality: 0.98 }, // Image quality and type
//         html2canvas: { scale: 4 }, // Scale factor for better quality
//         jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // PDF format
//     };

//     try {
//         // Generate the PDF as a Blob
//         const pdfBlob = await new Promise((resolve, reject) => {
//             html2pdf().from(element).set(options).outputPdf('blob').then(resolve).catch(reject);
//         });

//         // Create a Blob URL and open it in a new tab
//         const blobUrl = URL.createObjectURL(pdfBlob);
//         window.open(blobUrl, '_blank');
//     } catch (error) {
//         console.error('Error generating PDF:', error);
//     }

//     spinIcon.src = '/icons/print.png'
// });

// // Call adjustPdfPaperSize on load and resize
// window.addEventListener('load', adjustPdfPaperSize);
// window.addEventListener('resize', adjustPdfPaperSize);


// ws.onmessage = (event) => {
//     console.log(event.data);

//     const data = JSON.parse(event.data);
//     const grid = data.grid;
//     const words = data.words;

//     renderGrid(grid);
//     renderWords(words);
// }

// resetBtn.addEventListener('click', e=>{
//     window.location.reload()
// })





























//////////////////////////////////this is the code that words basic dont delete or change use as refrence only


// const gridElement = document.getElementById('word-search-grid');
// const wordsElement = document.querySelector('.words'); // Target the .words div

// const pdfPaperElement = document.querySelector('.pdf_paper');

// const ws = new WebSocket('ws://localhost:3000');

// ws.onmessage = (event) => {
//     const data = JSON.parse(event.data);
//     const grid = data.grid;
//     const words = data.words;

//     renderGrid(grid);
//     renderWords(words);
// };

// function renderGrid(grid) {
//     gridElement.innerHTML = '';
//     for (const row of grid) {
//         for (const cell of row) {
//             const cellElement = document.createElement('div');
//             cellElement.className = 'cell';
//             cellElement.textContent = cell;
//             gridElement.appendChild(cellElement);
//         }
//     }
// }

// function renderWords(words) {
//     words.forEach((word) => {
//     const wordElement = document.createElement('span');
//             // wordElement.textContent = word;
//     wordElement.innerHTML = `<p class="word-style">${word}</p>`
//     wordElement.style.color = 'black';
//             // wordElement.style.marginRight = '15px'; 
//     wordElement.style.display = 'inline-block'; 
//     wordsElement.appendChild(wordElement);
//  });
// }


// function adjustPdfPaperSize() {
//     // Define A4 dimensions in mm
//     const A4_WIDTH_MM = 210;
//     const A4_HEIGHT_MM = 297;

//     // Calculate dimensions based on viewport size
//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight;

//     // Aspect ratio for A4
//     const aspectRatio = A4_WIDTH_MM / A4_HEIGHT_MM;

//     // Adjust dimensions based on viewport size while maintaining aspect ratio
//     if (viewportWidth / viewportHeight > aspectRatio) {
//         pdfPaperElement.style.width = `${(viewportHeight * aspectRatio)}px`;
//         pdfPaperElement.style.height = `${viewportHeight}px`;
//     } else {
//         pdfPaperElement.style.width = `${viewportWidth}px`;
//         pdfPaperElement.style.height = `${(viewportWidth / aspectRatio)}px`;
//     }
  
// }

// document.getElementById('downloadPdf').addEventListener('click', async () => {
//     adjustPdfPaperSize();  // Adjust size before generating PDF

//     const spinIcon = document.querySelector('.spinIcon')
    
//     spinIcon.src = '/icons/spin.gif'
    
//     const element = document.querySelector('.pdf_paper');

//     const options = {
//         margin: [0, 0], // Margins around the content
//         filename: 'word-search-puzzle.pdf', // Name of the generated PDF file
//         image: { type: 'jpeg', quality: 0.98 }, // Image quality and type
//         html2canvas: { scale: 4 }, // Scale factor for better quality
//         jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // PDF format
//     };

//     try {
//         // Generate the PDF as a Blob
//         const pdfBlob = await new Promise((resolve, reject) => {
//             html2pdf().from(element).set(options).outputPdf('blob').then(resolve).catch(reject);
//         });

//         // Create a Blob URL and open it in a new tab
//         const blobUrl = URL.createObjectURL(pdfBlob);
//         window.open(blobUrl, '_blank');
//     } catch (error) {
//         console.error('Error generating PDF:', error);
//     }

//     spinIcon.src = '/icons/print.png'
// });

// // Call adjustPdfPaperSize on load and resize
// window.addEventListener('load', adjustPdfPaperSize);
// window.addEventListener('resize', adjustPdfPaperSize);

// ///////////////////////////////////





/////////////////////this code works better than ws but still only workds sometimes wtf


const gridElement = document.getElementById('word-search-grid');
const wordsElement = document.querySelector('.words'); 
const pdfPaperElement = document.querySelector('.pdf_paper');

async function fetchData() {
    try {
        // Make an HTTP GET request to the /data endpoint
        const response = await fetch('http://localhost:3000/data');
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data from the response
        const data = await response.json();
        const { grid, words } = data;

        // Render the grid and words on the page
        renderGrid(grid);
        renderWords(words);
    } catch (error) {
        console.error('Error fetching data from server:', error);
    }
}

document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputValue = document.querySelector('.input').value;
    document.querySelector('.module-container').style.display = 'none';

    try {
        const response = await fetch('http://localhost:3000/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic: inputValue })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Received data:', data); // Log received data
        const { grid, words } = data;
        renderGrid(grid);
        renderWords(words);
    } catch (error) {
        console.error('Error sending data to server:', error);
    }
});



const lowerCaseOrUpperCaseBtn = document.getElementById('lowerCaseOrUpperCaseBtn');

function changeTextCase() {
    const cells = document.querySelectorAll('.cell');
    const words = document.querySelectorAll('.word-style');
    let allLowerCase = true;

    cells.forEach((cell) => {
        if (cell.textContent !== cell.textContent.toLowerCase()) {
            allLowerCase = false;
        }
    });

    words.forEach((word) => {
        if (word.textContent !== word.textContent.toLowerCase()) {
            allLowerCase = false;
        }
    });

    if (allLowerCase) {
        cells.forEach((cell) => {
            cell.textContent = cell.textContent.toUpperCase();
        });
        words.forEach((word) => {
            word.textContent = word.textContent.toUpperCase();
        });
        lowerCaseOrUpperCaseBtn.textContent = 'lowercase';
    } else {
        cells.forEach((cell) => {
            cell.textContent = cell.textContent.toLowerCase();
        });
        words.forEach((word) => {
            word.textContent = word.textContent.toLowerCase();
        });
        lowerCaseOrUpperCaseBtn.textContent = 'UPPERCASE';
    }
}

lowerCaseOrUpperCaseBtn.addEventListener('click', changeTextCase);
// 

function renderGrid(grid) {
    gridElement.innerHTML = '';
    for (const row of grid) {
        for (const cell of row) {
            const cellElement = document.createElement('div');
            cellElement.className = 'cell';
            cellElement.textContent = cell;
            gridElement.appendChild(cellElement);
        }
    }
}

function renderWords(words) {
    words.forEach((word) => {
    const wordElement = document.createElement('span');
            // wordElement.textContent = word;
    wordElement.innerHTML = `<p class="word-style">${word}</p>`
    wordElement.style.color = 'black';
            // wordElement.style.marginRight = '15px'; 
    wordElement.style.display = 'inline-block'; 
    wordsElement.appendChild(wordElement);
 });
}


function adjustPdfPaperSize() {
    // Define A4 dimensions in mm
    const A4_WIDTH_MM = 210;
    const A4_HEIGHT_MM = 297;

    // Calculate dimensions based on viewport size
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Aspect ratio for A4
    const aspectRatio = A4_WIDTH_MM / A4_HEIGHT_MM;

    // Adjust dimensions based on viewport size while maintaining aspect ratio
    if (viewportWidth / viewportHeight > aspectRatio) {
        pdfPaperElement.style.width = `${(viewportHeight * aspectRatio)}px`;
        pdfPaperElement.style.height = `${viewportHeight}px`;
    } else {
        pdfPaperElement.style.width = `${viewportWidth}px`;
        pdfPaperElement.style.height = `${(viewportWidth / aspectRatio)}px`;
    }
  
}

document.getElementById('downloadPdf').addEventListener('click', async () => {
    adjustPdfPaperSize();  // Adjust size before generating PDF

    const spinIcon = document.querySelector('.spinIcon')
    
    spinIcon.src = '/icons/spin.gif'
    
    const element = document.querySelector('.pdf_paper');

    const options = {
        margin: [0, 0], // Margins around the content
        filename: 'word-search-puzzle.pdf', // Name of the generated PDF file
        image: { type: 'jpeg', quality: 0.98 }, // Image quality and type
        html2canvas: { scale: 4 }, // Scale factor for better quality
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // PDF format
    };

    try {
        // Generate the PDF as a Blob
        const pdfBlob = await new Promise((resolve, reject) => {
            html2pdf().from(element).set(options).outputPdf('blob').then(resolve).catch(reject);
        });

        // Create a Blob URL and open it in a new tab
        const blobUrl = URL.createObjectURL(pdfBlob);
        window.open(blobUrl, '_blank');
    } catch (error) {
        console.error('Error generating PDF:', error);
    }

    spinIcon.src = '/icons/print.png'
});

// 

// 
window.addEventListener('load', fetchData);
window.addEventListener('load', adjustPdfPaperSize);
window.addEventListener('resize', adjustPdfPaperSize);

















