// Object Oriented Programming

// Prototypal Inheritance

const dog = {
    name: "Michael",
    goodBoy: true,
    gender: "girl"
};

const dogTwo = {
    name: 'Rocco',
    color: 'brown'
};

dogTwo.__proto__ = dog;

console.log(dog);
console.log(dogTwo);

console.log(dogTwo.goodBoy);
console.log(dogTwo.name);

// Make two objects and one object needs to inherit from the object.
const apartOne = {
    location: "Brooklyn",
    color: "red",
    rooms: 3
};
const apartTwo = {
    location: "Long Island",
    color: "white"
};
apartTwo.__proto__ = apartOne;

console.log(apartTwo.color); // white
console.log(apartTwo.rooms); // 3

apartTwo.rooms = 4;
console.log(apartTwo.rooms);
console.log(apartOne.rooms);

// Constructor Functions
function User(name) {
    // this
    this.name = name;

    // return this
}

let adam = new User('Adam');
let pete = new User('Pete');

console.log(adam.name);
console.log(pete.name);

function NBAPlayer(name, team, threePointShooter) {
    // this = {}
    this.name = name;
    this.team = team;
    this.threePointShooter = threePointShooter;

    // return this
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true);
let lebron = new NBAPlayer('Lebron James', 'Lakers', true);
let james = new NBAPlayer('James Harden', 'Rockets', true);
console.log(steph);
console.log(steph.name);

// make a contructor function 
// Make 3 new variables with that contructor function