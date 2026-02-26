// normal function
function add(num1 , num2){
const sum = num1 + num2;
console.log(num1,num2, sum);

}
add(10)



//  f 

function add2(num1 , num2 = 0){
const sum = num1 + num2;
console.log(num1,num2, sum);

}
add2(10, 90);


function fullName(first , last = ''){
  const name = first +" "+ last;
  console.log(name);

}
fullName('shoaib', 'rahman')


function multiply(num1, num2= 1){
const result = num1  * num2
console.log(result);
}
multiply(5)