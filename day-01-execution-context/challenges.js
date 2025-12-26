// first challange
var a = 1;
function one() {
  var a = 2;
  function two() {
    var a = 3;
    console.log(a); // What prints? prints 3
  }
  two();
  console.log(a); // What prints? prints 2
}
one();
console.log(a); // What prints? printa 1

// second challange

var teacher = "Kyle";

function otherClass() {
  var teacher = "Suzy";

  function ask(question) {
    console.log(teacher, question);
  }

  ask("Why?"); // What prints? Suzy, Why?
}

otherClass();

// thrid challange
// For each variable usage, label as LHS (target) or RHS (source):

function foo(a) {
  // target or LHs
  var b = a; // b is target and a is source
  return a + b; // both are sources
}

var c = foo(2); // c is target and foo(2) is source

// challange four

function createCounter() {
  var count = 0;

  return function () {
    count++;
    return count;
  };
}

var counter1 = createCounter();
var counter2 = createCounter();

console.log(counter1()); // What? 1
console.log(counter1()); // What? 2
console.log(counter2()); // What? 1
console.log(counter1()); // What? 3

// fifth challange

var id = "global";

function printId() {
  console.log(id);
}

function wrapper1() {
  var id = "wrapper1";
  printId(); // What prints? global
}

function wrapper2() {
  var id = "wrapper2";
  printId(); // What prints? global
}

printId(); // What prints? global
wrapper1(); // What prints? global
wrapper2(); // What prints? global
