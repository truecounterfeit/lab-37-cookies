'use strict';

//implement a List constructor
// in comments above or within each function, note the Big-O runtime
const list = module.exports = [1, 2, 3, 4, 5];
list.constructor;


// implement push() and pop() on the List prototype
// O(1) runtime
list.prototype.push(6);
console.log('push: ' list);
list.prototype.pop();
console.log('pop: ' list);


// implement forEach() and filter() as pure methods on the List prototype
//O(n) runtime
list.forEach(function(element) {
    return element;
    console.log('forEach: ' element);
});

list.filter(function(element){
  return list.length > 3;
  console.log('filter: ' list);
});


// implement map() and reduce() as pure methods on the List prototype
//O(n^2) runtime
list.map(function(element) {
   return element * 5;
   console.log('map: ' list);
});

list.reduce(function(acc, value) {
    return acc + value;
    console.log('reduce: ' list);
});
