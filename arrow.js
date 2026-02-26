// function declaration
function add(num1, num2) {
  return num1 + num2;
}

// function expression
const add2 = function (num1, num2) {
  return num1 + num2;
};

//arrow function

const add3 = (num1, num2) => num1 + num2;
console.log(add2(60, 40));

const sub = (a, b) => a - b;
console.log(sub(10, 7));
