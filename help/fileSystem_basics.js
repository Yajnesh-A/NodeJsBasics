const fs = require('fs');
const path = require('path');

// To create a folder
// fs.mkdir(path.join(__dirname, 'example'), {} , (err) => {
//     if(err) throw err;
//     console.log("Folder created");
// })

//To write in a file
fs.writeFile(path.join(__dirname, 'example', 'writeFileExample.txt'), "Written in this file from " + path.basename(__filename), (err) => {
    if (err) throw err
    console.log("Created & Written in writeFileExample.txt");
    //Since anothe writeFile overwrites what's already been written, using appendFile to add some content
    fs.appendFile(path.join(__dirname, 'example', 'writeFileExample.txt'), '\nappending some content from ' + path.basename(__filename), (err) => {
        if (err) throw err
        console.log("Added some content to writeFileExample.txt")
    })
})

//To read a file
fs.readFile(path.join(__dirname, 'example', 'readFile.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log("File read and the data is\n", data);
})