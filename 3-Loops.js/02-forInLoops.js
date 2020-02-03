/*
    - great for counting key/value pairs in an object. Properties in an object are what is called enumerable
        - for in Loops will iterate over an objects enumerable properties
*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1,
}

console.log(student.degree); //dot notation
for(let item in student){
    console.log(item);
    //console.log(student[item]);  //You can comment a line out of a loop to run it, and then uncomment. *Object bracket notaion
}

let dogArray = ['great dane', 'husky', 'border collie', 'dalmation', 'pug'];
 
for (let dog in dogArray){
    //console.log(dog);
    console.log(dogArray[dog]);
    console.log(dogArray[1]);   //bracket notation
}

let name = sTepHEN; 
//let capName;

for (let name.upperCAse[0]){
    console.log(name[1]);
    for (let name.lowerCase[1,6]){
        console.log
    }
}


let name = 'sTepHEN';
let capName;

for (let i in name) {
    //console.log(i);
    //console.log(name); {
        if (i == 0) {
            capName = name[i].toUpperCase();
    
        } else {
            capName += name[i].toLowerCase();
        }
    }
    console.log(capName);

