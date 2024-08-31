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


// const gridElement = document.getElementById('word-search-grid');
// const wordsElement = document.querySelector('.words'); 
// const pdfPaperElement = document.querySelector('.pdf_paper');

// async function fetchData() {
//     try {
//         // Make an HTTP GET request to the /data endpoint
//         const response = await fetch('http://localhost:3000/data');
        
//         // Check if the request was successful
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         // Parse the JSON data from the response
//         const data = await response.json();
//         const { grid, words } = data;

//         // Render the grid and words on the page
//         renderGrid(grid);
//         renderWords(words);
//     } catch (error) {
//         console.error('Error fetching data from server:', error);
//     }
// }

// document.getElementById('form').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const inputValue = document.querySelector('.input').value;
//     document.querySelector('.module-container').style.display = 'none';

//     try {
//         const response = await fetch('http://localhost:3000/generate', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ topic: inputValue })
//         });
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log('Received data:', data); // Log received data
//         const { grid, words } = data;
//         renderGrid(grid);
//         renderWords(words);
//     } catch (error) {
//         console.error('Error sending data to server:', error);
//     }
// });

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
// // 

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

// // 

// // 
// window.addEventListener('load', fetchData);
// window.addEventListener('load', adjustPdfPaperSize);
// window.addEventListener('resize', adjustPdfPaperSize);





//////post to stackoverflow. it works sometimes. dont DELETE ABOVE CODE


// const gridElement = document.getElementById('word-search-grid');
// const wordsElement = document.querySelector('.words'); 
// const pdfPaperElement = document.querySelector('.pdf_paper');

// // Fetch and render data on page load
// async function fetchData() {
//     try {
//         const response = await fetch('http://localhost:3000/data');
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         const { grid, words } = data;
//         console.log('Fetched data:', data);
//         renderGrid(grid);
//         renderWords(words);
//     } catch (error) {
//         console.error('Error fetching data from server:', error);
//     }
// }

// // Handle form submission
// document.getElementById('form').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const inputValue = document.querySelector('.input').value;
//     document.querySelector('.module-container').style.display = 'none';

//     try {
//         const response = await fetch('http://localhost:3000/generate', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ topic: inputValue })
//         });
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log('Received data:', data);
//         const { grid, words } = data;
//         renderGrid(grid);
//         renderWords(words);
//     } catch (error) {
//         console.error('Error sending data to server:', error);
//     }
//     // Optionally refresh the data
//     await fetchData();
// });

// const lowerCaseOrUpperCaseBtn = document.getElementById('lowerCaseOrUpperCaseBtn');

// // Toggle text case
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

// // Render the word search grid
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

// // Render the list of words
// function renderWords(words) {
//     wordsElement.innerHTML = ''; // Clear previous words
//     words.forEach((word) => {
//         const wordElement = document.createElement('span');
//         wordElement.innerHTML = `<p class="word-style">${word}</p>`;
//         wordElement.style.color = 'black';
//         wordElement.style.display = 'inline-block';
//         wordsElement.appendChild(wordElement);
//     });
// }

// // Adjust PDF paper size based on viewport
// function adjustPdfPaperSize() {
//     const A4_WIDTH_MM = 210;
//     const A4_HEIGHT_MM = 297;
//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight;
//     const aspectRatio = A4_WIDTH_MM / A4_HEIGHT_MM;

//     if (viewportWidth / viewportHeight > aspectRatio) {
//         pdfPaperElement.style.width = `${(viewportHeight * aspectRatio)}px`;
//         pdfPaperElement.style.height = `${viewportHeight}px`;
//     } else {
//         pdfPaperElement.style.width = `${viewportWidth}px`;
//         pdfPaperElement.style.height = `${(viewportWidth / aspectRatio)}px`;
//     }
// }

// // Generate and download PDF
// document.getElementById('downloadPdf').addEventListener('click', async () => {
//     adjustPdfPaperSize();  // Adjust size before generating PDF

//     const spinIcon = document.querySelector('.spinIcon');
//     spinIcon.src = '/icons/spin.gif';

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

//     spinIcon.src = '/icons/print.png';
// });

// // Initial paper size adjustment
// window.addEventListener('load', adjustPdfPaperSize);
// window.addEventListener('resize', adjustPdfPaperSize);











































//////////////////start over from here




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































//////////////////////////////////////////////best version so far her





// const gridElement = document.getElementById('word-search-grid');
// const wordsElement = document.querySelector('.words');
// const pdfPaperElement = document.querySelector('.pdf_paper');

// const ws = new WebSocket('ws://localhost:3000');

// const form = document.getElementById('form')
// const input = document.querySelector('.input')
// const moduleContainer = document.querySelector('.module-container');
// const resetBtn = document.getElementById('resetBtn');
// const pdf_title = document.getElementById('pdf_title');
// const removeLoad = document.querySelector('.removeLoad')

// let storedInputValue = ''; 

// ws.onopen = () => {
//     console.log('WebSocket connection opened');
// };

// form.addEventListener('submit',e=>{
//     e.preventDefault();
//     const inputValue = input.value;
//     if(!inputValue){
//         return
//     }else{
//         ws.send(JSON.stringify({ value: inputValue }));
//         console.log('Sent to server:', inputValue);
//         input.value = '';
//         moduleContainer.remove()
//         storedInputValue = inputValue;
//     }
// })



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
//         wordElement.style.display = 'inline-block';
//         wordsElement.appendChild(wordElement);
//     });
//     removeLoad.remove()
//     pdf_title.textContent = storedInputValue;
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

// resetBtn.addEventListener('click',e=>{
//     window.location.reload()
// })


///////////////////////////////////////





const gridElement = document.getElementById('word-search-grid');
const wordsElement = document.querySelector('.words');
const pdfPaperElement = document.querySelector('.pdf_paper');

const form = document.getElementById('form');
const input = document.querySelector('.input');
const moduleContainer = document.querySelector('.module-container');
const resetBtn = document.getElementById('resetBtn');
const pdf_title = document.getElementById('pdf_title');
const removeLoad = document.querySelector('.removeLoad');

const lowerCaseOrUpperCaseBtn = document.getElementById('lowerCaseOrUpperCaseBtn');

let ws;
let storedInputValue = ''; 
let reconnectInterval = 5000; 
let messageQueue = []; 

// 
const age_select = document.querySelector('.age_select')
// 

function connectWebSocket() {

    ///use for production
    ws = new WebSocket('https://wordsearchpuzzlegenerator.onrender.com');

    ///use for building
    // ws = new WebSocket('ws://localhost:3000');

    ws.onopen = () => {
        console.log('WebSocket connection opened');

        while (messageQueue.length > 0) {
            const msg = messageQueue.shift();
            ws.send(JSON.stringify(msg));
        }
    };

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const grid = data.grid;
        const words = data.words;

        renderGrid(grid);
        renderWords(words);
    };

    ws.onclose = () => {
        console.log('WebSocket connection closed. Attempting to reconnect...');
        setTimeout(connectWebSocket, reconnectInterval);
    };

    ws.onerror = (error) => {
        console.error('WebSocket error:', error);
    };
}

connectWebSocket();

const htmlElement = document.documentElement;

htmlElement.style.overflowY = 'hidden';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = input.value;
    // 
    let ageSelect = age_select.value
    console.log(ageSelect)
    // 
    if (!inputValue) {
        return;
    } else {
        // const message = { 
        //     value: inputValue,
        //     // 
        //     age: ageSelect
        //     // 
        // };

        // 
        const message = `${inputValue}|${ageSelect}`;
        // 
        console.log('Message to be sent to server:', message);
        if (ws.readyState === WebSocket.OPEN) {
            // ws.send(JSON.stringify(message));

            // 
            ws.send(message);
            // 
        } else {
            messageQueue.push(message);
            console.log('Message queued:', message);
        }
        input.value = '';
        htmlElement.style.overflowY = 'auto'
        moduleContainer.remove();
        storedInputValue = inputValue
    }
});

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
    wordsElement.innerHTML = ''; 
    words.forEach((word) => {
        const wordElement = document.createElement('span');
        wordElement.innerHTML = `<p class="word-style">${word}</p>`;
        wordElement.style.color = 'black';
        wordElement.style.display = 'inline-block';
        wordsElement.appendChild(wordElement);
    });
    removeLoad.remove();
    pdf_title.textContent = storedInputValue.toUpperCase();
}

function changeTextCase() {
    const cells = document.querySelectorAll('.cell');
    const words = document.querySelectorAll('.word-style');
    const pdf_title = document.getElementById('pdf_title');
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
        pdf_title.textContent = pdf_title.textContent.toUpperCase();
        cells.forEach((cell) => {
            cell.textContent = cell.textContent.toUpperCase();
        });
        words.forEach((word) => {
            word.textContent = word.textContent.toUpperCase();
        });
        lowerCaseOrUpperCaseBtn.textContent = 'lowercase';
    } else {
        pdf_title.textContent = pdf_title.textContent.toLowerCase();
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

function adjustPdfPaperSize() {
    const A4_WIDTH_MM = 210;
    const A4_HEIGHT_MM = 297;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const aspectRatio = A4_WIDTH_MM / A4_HEIGHT_MM;

    if (viewportWidth / viewportHeight > aspectRatio) {
        pdfPaperElement.style.width = `${(viewportHeight * aspectRatio)}px`;
        pdfPaperElement.style.height = `${viewportHeight}px`;
    } else {
        pdfPaperElement.style.width = `${viewportWidth}px`;
        pdfPaperElement.style.height = `${(viewportWidth / aspectRatio)}px`;
    }
}

document.getElementById('downloadPdf').addEventListener('click', async () => {
    adjustPdfPaperSize();  
    const spinIcon = document.querySelector('.spinIcon');
    spinIcon.src = './icons/spin.gif';

    const element = document.querySelector('.pdf_paper');

    const options = {
        margin: [0, 0], 
        filename: 'word-search-puzzle.pdf', 
        image: { type: 'jpeg', quality: 0.98 }, 
        html2canvas: { scale: 4 }, 
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } 
    };

    try {
        const pdfBlob = await new Promise((resolve, reject) => {
            html2pdf().from(element).set(options).outputPdf('blob').then(resolve).catch(reject);
        });
        const blobUrl = URL.createObjectURL(pdfBlob);
        window.open(blobUrl, '_blank');
    } catch (error) {
        console.error('Error generating PDF:', error);
    }

    spinIcon.src = '/icons/print.png';
});

window.addEventListener('load', adjustPdfPaperSize);
window.addEventListener('resize', adjustPdfPaperSize);


resetBtn.addEventListener('click', (e) => {
    window.location.reload();
});
