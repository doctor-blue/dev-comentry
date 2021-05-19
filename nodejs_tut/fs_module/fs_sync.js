const {
    readFileSync,
    writeFileSync
} = require('fs')

const first = readFileSync('./text_files/first_text_file.txt', 'utf8');

const second = readFileSync('./text_files/second_text_file.txt', 'utf8');

writeFileSync('./text_files/first_and_second.txt', first + second, {
    flag: 'a'
})


// console.log(first,second);