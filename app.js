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