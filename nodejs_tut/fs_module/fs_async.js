const {
    readFile,
    writeFile
} = require('fs');
// let first = "";
// let second ='';

readFile('./text_files/first_text_file.txt', 'utf8', (err, file1) => {
    if (err) {
        console.log("Error: ", err);
        return;
    }
    console.log("Data: ", file1);
    // first = file1;

    readFile('./text_files/second_text_file.txt', 'utf8', (err, file2) => {
        if (err) {
            console.log("Error: ", err);
            return;
        }
        console.log("Data: ", file2);
        // second = file2;
        writeFile('./text_files/async_text_file.txt', file1 + file2, { flag: 'a' }, () => {
            console.log("Success");
        })
    });

});

// console.log("Before call read file 2");


