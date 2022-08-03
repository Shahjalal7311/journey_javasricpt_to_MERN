// Named function Declaration and call
function test(){ // this line is function Declaration
  console.log('check name function');
}
// test();

// Variable function Declaration
const date_fun = function(){
  console.log( Date.now());
}
// date_fun();

// Arrow function Declaration
const arrow_function = () => {
  console.log(Date.now(),'check arrow function');
}
// arrow_function();

//Inline Arrow function Declaration
const calculation = (num, fn) =>{
  let result = 0;
  for (let index = 0; index < num; index++) {
    const temp = fn(index);
    result = result + temp;
  }
  return result;
}
// const sum = calculation(10, (x) =>{ return x+x});
// console.log(sum,'sumsum');
// const multi = calculation(10, (x) =>{ return x*x});
// console.log(multi,'multimulti');

// Minimal function Declaration
// Minimal functin `()` this notetion is Minimal function Declaration and execution
//()=> x+x; // Minimal functin
// example
const squre = (x) => x*x;
// console.log(squre(10),'Minimal function');

// Return data 
const squre_return = (x) => { return x*x };
// console.log(squre_return(10),'Return data');

//Return function Declaration and execution

const function_ret = (x) => {
  const fn =  function(){
    return x*x;
  }
  return fn;
}
// console.log(function_ret(10),'return function');
// console.log(function_ret(10)(),'return value');

/*
* Scope
* if we declared a veriable inside 'n=20' a function and outside 'n=10' function.
* we try to acecess the variable n1 and n2 inside the function, we can acecess `n` and n1 variable inside the function
* but if we try to acecess n && n1 out site the function we can't acecss n1 varible
* its call scoping or Scope  
*/

let n = 20;
function scpoing_function(){
  n1 = 10;
  console.log(n,'call varibel');
}

// console.log(n,'return value'); // return value
// console.log(n1,'call value') // show undefind error

function outer(x){
  function inner(y){
    return x+y;
  }
  return inner;
}

// console.log(outer);// it's return a functon
// console.log(outer(10),'outer') // this outer value 10 is called closer
// const temp = outer(10);

// console.log(temp(20),'jjjjjjjj')

// Update refernce value inside function
var n1 = 10;
function refference(){
  var n1 = 20;
}
// console.log(refference(),'refference');
// console.log(n1,'')

var m = { x: 10 }
function change_new(){
  var m = {x:30}; //
  m.x = 30 // call by refference
}
// console.log(m,'change_new');