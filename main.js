// JavaScript Tutorial from Traversy Media (YouTube)

// String, Numbers, Boolean, null, undefined

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);


// Concatenation
console.log("My name is " + name + " and I am " + age);

// Template String
console.log(`My name is ${name} and I am ${age}`)


const s = 'tech, computers, IT, code';
console.log(s.length);
console.log(s.substring(0, 4).toUpperCase());
console.log(s.split(''));
console.log(s.split(', '));


// Arrays
const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
fruits.push('mango');
fruits.unshift('strawberries');
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));
console.log(fruits);
console.log(fruits[1]);


// Object literal
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person);
console.log(person.firstName, person.lastName, person.hobbies[1], person.address.city);


// Pulling info out of Person
const { firstName, lastName, address: { city } } = person;
console.log(firstName);
console.log(city);

// Add new property
person.email = 'john@gmail.com';
console.log(person);


// Arrays todo
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];
console.log(todos);
console.log(todos[1].text);


// Convert to jSon
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// For Loop
for (let i = 0; i < 10; i++) {
    console.log(`For loop number: ${i}`);
}

// While loop
let i = 0;
while (i < 10) {
    console.log(`While loop number: ${i}`);
    i++;
}

// Loop through arrays - two ways
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for (let todo of todos) {
    console.log(todo.id);
}

// Best suggested way to loop is using - High order array methods
// forEach, map, filter
todos.forEach(function (todo) {
    console.log(todo.text);
});


const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText);


const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);


const todoCompletedTextOnly = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
});
console.log(todoCompletedTextOnly);


// Conditionals
const k = '10';

if (k === 10) {
    console.log('x is 10');
} else if (k > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}


// Ternery operator
const f = 9;

const color = f > 10 ? 'red' : 'blue';
console.log("Ternery = " + color);

const t = 1;
const thing = t === 10 ? 'true' : 'not true'
console.log("Ternery = " + thing);


// Switches
switch (color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is NOT red or blue');

}

// Functions
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}
console.log(addNums(5, 4));


//Arrow function
const subNums = (num1, num2) => {
    return num1 - num2;
}
console.log(subNums(5, 4));


// Object Oriented
// Constructor Function
function PersonFunction(firstName, lastName, dob) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.dob = new Date(dob);
   
//    //This is function but will be attached for all PERSON object. So always use PROTOTYPE
//    this.getBirthYear = function() {
//       return this.dob.getFullYear();
//    };
   
//    this.getFullName = function () {
//       return `${this.firstName} ${this.lastName}`;
//    };
   
}

//Use this PROTOTYPE logic rather then above straight function. We dont need to expose functions for all PERSON object
PersonFunction.prototype.getBirthYear = function() {
   return this.dob.getFullYear();
};

PersonFunction.prototype.getFullName = function () {
   return `${this.firstName} ${this.lastName}`;
};
// Instantiate object
const person1 = new PersonFunction('John-1', 'Doe', '4-3-1980');
const person2 = new PersonFunction('Mary-1', 'Smith', '3-6-1970');
console.log(person1);
console.log(person2);
console.log("Function - getBirthYear Coming from function = " + person1.getBirthYear());
console.log("Function - getFullName Coming from function = " + person2.getFullName());


// Class - With ES6 CLASSES were added to JS, it does the same thing under the hood as above. Just a prettier way
class PersonClass
{
    constructor(firstName, lastName, dob)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear()
    {
        return this.dob.getFullYear();

    }
    getFullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}
// Instantiate object
const person3 = new PersonClass('John-2', 'Doe', '4-3-1980');
const person4 = new PersonClass('Mary-2', 'Smith', '3-6-1970');
console.log(person3);
console.log(person4);
console.log("Class - getBirthYear Coming from function = " + person3.getBirthYear());
console.log("Class - getFullName Coming from function = " + person4.getFullName());



// DOM
// Single element

console.log(document.getElementById('my-form'));

const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container')); //Always use querySelector  its newer, all others are older
console.log(document.querySelector('h1'));
console.log(document.getElementById('email'));
console.log(document.querySelector('#email'));



// Multiple element

console.log(document.querySelectorAll('.item')); //Always use querySelectorAll it's newer, all others are older (getElementsByClassName, getElementsByTagName)
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


const ul = document.querySelector('.items');
// ul.remove();
// ul.firstElementChild.remove();
// ul.lastElementChild.remove();
// ul.lastElementChild.remove();
// ul.children[1].innerHTML = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';




// //Events
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// //btn.addEventListener('click',function (e){ or
// btn.addEventListener('click', (e) => {
//    e.preventDefault();
//    document.querySelector('#my-form').style.background = '#ccc';
//    document.querySelector('body').classList.add('bg-dark');
//    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';

// });

// btn.addEventListener('mouseover', (e) => {
//    e.preventDefault();
//    document.querySelector('#my-form').style.background = '#ccc';
//    document.querySelector('body').classList.add('bg-dark');
//    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';

// });



// Little form script - grab bunch of stuff from the DOM and put them into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '')
    {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
        // ///Another way to do setTimeout
        // setTimeout(function(e) {
        //     msg.remove();
        // }, 2000); // <-- time in milliseconds
    }
    else
    {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }

}