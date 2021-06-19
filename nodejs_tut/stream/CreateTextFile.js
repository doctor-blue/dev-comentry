const {
    readFile,
    writeFile
} = require('fs');

for (let index = 0; index < 10000; index++) {
    writeFile('./text_files/big_text_file.txt', 'Hello world ' + index + '\n', { flag: 'a' }, () => {
        console.log("Success");
    })

}


