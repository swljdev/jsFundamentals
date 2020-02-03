/*
for loops take in 3 parameters
1. initial expression
2. condition
3. increment exrpession
*/


//      1         2            3
for (let i = 0; i < 10; i = i + 1) {  // shorthand: i = +1 can be i++
    console.log(i);
}

for (let x = 0; x <= 20; x = x += 2) {
    console.log(x);

}

for (let i = 10; i >= 0; i = i -= 1) {
    console.log(i);
}

for (let i = 0; i >= -24; i -= 2) {
    console.log(i);
}

let name = "Stephen"
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);  // you need to console log your name, but also the array [] "i"
}


let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum = sum + i;
    console.log(i);
}

// Be sure to look at Donovan's class notes for this lesson!!