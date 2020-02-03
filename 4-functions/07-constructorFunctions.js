
// 1        2           3
function Person(name, age, canVote){
     //  4    5       6
        this.name = name
        this.age = age
        this.canVote = canVote
}

//              7    8 
let person4 = new Person("James", 80, true);
let person5 = new Person("Doug", 32, true);
console.log(person4);
console.log(person5);

/*
    1. the funciton keyword
    2. the function name. For constructor functions, the name of the function should be capitalized
    3. the parameters. These will be the values for the keys in our object once a new "person" is created
    4. <this keyword> This refers to the function name, Person in this example
    5. the keys of the new object we are creating
    6. the argument we pass through our function all will resolve as the value
    7 & 8. the new keyword creates a new instance of our "Person" function, with the values we pass into that function when invoking it

*/