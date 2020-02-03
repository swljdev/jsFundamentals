let name = ()=> {
    return 'Stephen';
}

let myNameIs = name();
console.log(myNameIs);


function tip (5, 10, 15) {
    return 'Value'
    for(let i = 0; i <=0; i *.05) {
        console.log(i)
    }

}
tip(4)


// Normal Function
 function tipCalc(bill){
     let tip = bill *.14
     return tip.toFixed(2);
 }

 let totalTip = tipCalc(19.84);
 console.log(totalTip);

 // Arrow Function

 let tipCalc = bill => (bill *0.2).toFixed(2); //return is implied because of the arrow function
 let totalTip = tipCalc(19.84);
 console.log(totalTip);