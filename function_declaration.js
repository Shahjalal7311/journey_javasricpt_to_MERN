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

