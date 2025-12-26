// First example

// Global scope
var globalVar = "I'm global";

function level1() {
  // Function scope
  var functionVar = "I'm in function";
  console.log(globalVar); // ✓ Can access global
}

level1();
// console.log(functionVar); // Error! Can't access function scope

// second example

var mentor = "Master Yoda";

function jediTemple() {
  var padawan = "Luke";

  function trainingRoom() {
    var droid = "R2-D2";
    console.log(padawan + " trains with " + droid);
    console.log("Under guidance of " + mentor);
  }

  trainingRoom();
  // console.log(droid); //  Would error - can't access inner scope
}

jediTemple();

// third example

var x = "global";

function outer() {
  var x = "outer";

  function middle() {
    var x = "middle";

    function inner() {
      var x = "inner";
      console.log(x); // What prints? "inner" (lexical lookup)
    }

    inner();
    console.log(x); // What prints? "middle"
  }

  middle();
  console.log(x); // What prints? "outer"
}

outer();
console.log(x); // What prints? "global"
