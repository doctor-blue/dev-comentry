const {
    readFile,
    writeFile
} = require('fs');
const util = require('util');

const readFileAsync = util.promisify(readFile);
const writeFileAsync = util.promisify(writeFile);

const readAndWriteFile = async () => {
    try {
        const first = await readFileAsync('./text_files/first_text_file.txt', 'utf8');
        const second = await readFileAsync('./text_files/second_text_file.txt', 'utf8');

        console.log(first + " " + second);

        writeFileAsync('./text_files/async_await_file.txt', first + ' ' + second, { flag: 'a' });
    } catch (err) {
        console.log("Error: ", err);
    }
}
readAndWriteFile()