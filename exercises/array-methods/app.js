var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 

vegetables.pop();
console.log("vegetables", vegetables);
 
var b = fruit.shift();
console.log("fruit", fruit);

var c = fruit.indexOf("orange");
console.log("fruit", fruit);

fruit.push(c);
console.log("fruit", fruit);

var d = vegetables.length;
console.log(d);

vegetables.push(d);
console.log("vegetables", vegetables);

var food = fruit.concat(vegetables);
console.log("food", food);

food.splice(4,2);
console.log("food", food);

food.reverse();
console.log("food", food)




