/*BOOLEANS
    - a boolean has two possible values of true or false

*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*
    - Null
        - Null is an empty value. Think of it like an empty container: nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty);

/*
    UNDEFINED
    - no value has been assigned and it does not act as an empty conatiner, whereas null does
*/

let undef = undefined;
console.log(undefined);

let correct;
console.log(correct);

/*
        - null is like a container with nothing in it. Shipped with nothing in it.
        - undefined is when a variable has never been set, or hasn't been created yet. The box hasn't even been assembled yet.
*/

/*
    NUMBERS
        - numbers are literally just numbers. Don't need anything special to write them
*/

let degrees = 33;
console.log(degrees);

let precise = 999999999999999; // 15 9's
console.log(precise);

let rounded = 9999999999999999; // 16 9's
console.log (rounded);

let decimal = 0.2 + 0.1;
console.log(decimal);

/*
    STRINGS
    - strings are datatypes used to represent text and are wraped in either single or double quotes
*/

let stringOne = "single quotes"
let stringTwo = "double qotes";

console.log (stringOne, stringTwo);

// numbers vs strings
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

//if one data type is a string, and one is a number, the compiler will assume you are trying to work with strings and convert the number to a string

/*
    OBJECTS
        - Objects are used to store many values instead of singular value
        -hold what are known as key/value pairs
*/

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}
    console.log(frodo);
    console.log(typeof frodo);

    /*
        ARRAYS
        - arrays are containers that hold a list of items

        Let List = [ 'item1', 'item2', 'item3];
             1     2       3
            1. name of the array, or variable, 
            2. square brackets denote this is an array
            3. each item is in quotes, and is separated by a comma regarldess of datatype 

    */

    let burritos = ['large', 4, true]
    console.log(burritos);
    console.log(typeof burritos);

    let x = "Stephen";
    let y = "Lowe";

    let Address = "6075 West Foster Branch Drive";
    let City = "Pendleton";
    let State = "IN";
    let Zip = 46064;

    console.log (x, y, Address, City, State, Zip);

    // if i want commas inbetween the city and state where they go, add [+',']

    /*
        STRING: PROPERTIES
            - properties are qualities associated witha  specific datatype
            - strings have properties, or qualities that are associated specifically with strings
    */

let myName = "Stephen";
console.log(myName.length); // length will not start counting at zero

/*
    STRING; METHODS
        - methods are tools that can help us manipulate certain data
        - .property & .method()
            - no paranthesis for properties
*/

let myNameIs = "Stephen"
console.log(myNameIs.toUpperCase()); //toUpperCase() is a method that changes a string to all uppercase

let home = "My Home is Greenwood";
console.log(home.includes('Greenwood'));

let sent = 'this sentence will be split into individual parts';

console.log(sent.split(" ")); //if I don't put a space inbetween the quotes, it'll seperate each charcter. A space will separate each word.


