/*
    - javasript is interpereted line by line (read top to botto), and performs 2 pazssses of our code
        - the first pass of our code recognizes where we have eclared variables and stores them away in memory
            - Looks at anything on the left side of our assignment operator (=)
        the second pass of our code is where values are being assigned to our variables

    - NOTE: functions are also hoisted

*/

console.log(name);
let name = "Stephen";

b();

function b(){
    console.log("Ive been hoisted");
}



