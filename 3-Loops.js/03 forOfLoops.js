/*
    - forOf Loops look at the iterable properties of an array
    - can't use forOf Loops on objects, because they are enumerable, not iterable
*/

//let student = {
/*ame: "Peter",
awesome: "True",
    degree: "JavaScript",
    week: 1
}

for (let item of student) [
    console.log(item)
]*/

let dogArray = ['great dane', 'husky', 'border collie', 'dalmation', 'pug'];
​
for (let dog of dogArray) {
    console.log(dog, 'goes bark');
}