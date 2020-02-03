function hi(){
    console.log('hello')
}

//hi;
//hi();
// console.log(hi);

console.log(hi())

// as soon as our parser see's that there is a function invocation, that happens immediately

function numbers() {
    for(let i = 1; i < 11; i++){
        console.log(i)
    }
}

numbers();

let arr = ['This', 'is', 'really', 'cool'];
function arrlist() {
for (let word of arr) {
    console.log(word);
}
}
arrlist();


function numberTest(i) {

      if (i % 2 === 0) {
          console.log('the number is even');
      } else {
          console.log('the number is odd');
    }
  }
  for (let i=0; i <= 10; i++) { 
      console.log(i)

  
  numberTest(i);
  }