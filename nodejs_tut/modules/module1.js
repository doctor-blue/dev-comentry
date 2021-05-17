const showName = (name) => {
    console.log(name);
}

// module.exports.showName = (name)=>{
//     console.log(name)
// } 

const john = {
    name: "John",
    age: 35
}

// module.exports.john = {
//     name:"John",
//     age:35
// }
showName('John')

module.exports = { showName, john }

