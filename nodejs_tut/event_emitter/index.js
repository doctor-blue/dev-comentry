const EventEmiter = require('events');
const util = require('util');

const customEvent = new EventEmiter();

const User = function (name, score) {
    this.name = name;
    this.score = score;
}

// customEvent.addListener("something",()=>{
//     console.log("Say hi from listener 1");
// });

// customEvent.on("something",()=>{
//     console.log("Say hi from listener 2");
// });

// customEvent.emit("something")

util.inherits(User, EventEmiter);

const john = new User('John', 0);

john.on('SCORE', (score) => {
    console.log('score = ',score);
})

john.emit('SCORE',9);
