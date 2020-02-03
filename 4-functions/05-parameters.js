function hi(name) {                         //(name) is a placeholder right now
    console.log(`Hello, ${name}`); 
}

hi('Stephen');


function zach(ticket) {
    console.log("I exchanged my ticket for a ${ticket}");

}

zach('sandwich');

function counter(number, string){
   // for(let i = 0; i <=10, i++) {
   for(number; number <= 10; number++) {
   console.log(number);
    }
    console.log(string);
}

counter(10, 'hello');


function name(first, last){
    // let fullName = first + '' = last;
    console.log("Hello, my name is " + first + " " + last);
}

name('Stephen', 'Lowe');
