/*
    - a variable is a named container for starting data
    _ we name variables so that we can refer to the again
   
*/

let a = 2;

    let     b       =        1;
    /* (1)   (2)     (3)     (4)
    1. javascript keyword
    2. variable name 
    3. assignment operator
    4  variable value
     */

console.log(a + b);

/* 
    notes on variables
        - a variable name must begin with a letter, underscore, or dollar sign
        - numbers may follow the about characters, but they cannot come first
        - javascript is case sensitive = 'hello' and 'Hello' are two seperate variables
        - no spaces allowed in variable names
        - camelCase first word is undercase and subsequent words are capitalized
            - this helps with readability
*/


/*
    - var, let, const:

        - var: old keyword for variables in javascript

        - let: new keyword for variables in javascript ES6

        - const: unchangeable variable
*/

/*
    declarations vs initialization:

        - decalarations are the LEFT SIDE of a variable or equal sign
            - Let x
            - declarations are on the Left Side of the asssingment operator (=)

        - initializations are on the RIGHT SIDE of the variable
            - it sets the value of the variable
            - the value we initialize our variables as is what is on the right side of the assignment operator (=)
*/

let x;
console.log('Declaration:', x); // declaration: undefinded

x=10;
console.log('Initialization:', x); //initialization: 10

x=100;
console.log('Reintialization:', x);

let y = 'hello';
console.log (x, y);

const today = 'Great';
console.log(today);


