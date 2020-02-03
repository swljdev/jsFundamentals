let food = ['pecan pie', 'shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

food.push('Pizza');
console.log('push:', food); // appends or 'pushes an item into the group. Appends to end

food.splice(1, 1, 'Bananas');   // (position, how many to delete, what to add in its place)
console.log('splice:', food);

food.splice(2, 0, 'Sweet Potato Pie'); //(position/, how many to delete, what to add in its place)
console.log('splice 2', food);

food.pop();                 //removes the last element of an array
console.log('Pop', food)

food.shift();               // removes the first element in an array
console.log('Shift', food)

food.unshift('Popcorn', 'Steak'); // unshift adds 1 or more items to the beginning of the array

console.log('original array', food);

let movies = ['Godfather', 'Star Wars', 'Marvel', 'Batman'];

movies.forEach(movies => console.log(movies));
movies.push('Tootsie');
console.log(movies)
movies.unshift('Disney');
console.log(movies);