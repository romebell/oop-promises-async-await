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
    this.intro = function() {
        console.log("Hi, my name is " + this.name);
    };

    // return this
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true);
let lebron = new NBAPlayer('Lebron James', 'Lakers', true);
let james = new NBAPlayer('James Harden', 'Rockets', true);
console.log(steph);
steph.intro();
lebron.intro();
james.intro(); 

// console.log(console);


// console.log(steph.name);

// make a constructor function 
// Make 3 new variables with that contructor function

// Class 
class Car {
    constructor(year, make, model, color) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
    }

    drive(){
        console.log('Vroom');
    }
    intro() {
        console.log('This car is a ' + this.make + ' ' + this.model);
    }
}

let tesla = new Car(2020, 'Tesla', 'Model S', 'red');
console.log(tesla);
tesla.drive();
tesla.intro(); 

class GithubProfile {
    constructor(username, name, url) {
        this.username = username;
        this.name = name;
        this.url = url;
    }

    intro() {
        console.log(`My name is ${this.name} and my username is @${this.username}`);
    }
}

// https://api.github.com/users/romebell
// fetch('https://api.github.com/users/romebell')
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     let githubURL = data.url;
//     let githubUsername = data.login;
//     let githubName = data.name;

//     let rome = new GithubProfile(githubUsername, githubName, githubURL);
//     console.log(rome);

//     rome.intro();
// })

// fetch('https://api.github.com/users/Lizzwest')
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     console.log(data);
//     const lizz = new GithubProfile(data.login, data.login, data.url);
//     console.log(lizz);
//     lizz.intro();
// })

let isMomHappy = false;

// Promise
// let willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             let phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             // let reason = new Error('mom is not happy');
//             reject("Mom is not happy"); // reject
//         }

//     }
// );

let willIGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            brand: 'iPhone',
            color: 'red'
        }
        resolve(phone);
    }
    else {
        reject('No phone');
    }
})



// console.log(willIGetNewPhone);
willIGetNewPhone.then(result => {
    console.log(result);
});