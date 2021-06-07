console.log('Hello');

setTimeout(() => {
    console.log('How are u?');
}, 0);

new Promise((resolve, reject) => {
    resolve(`I'm good!`)
}).then(resolve => console.log(resolve));

console.log('Bye!');