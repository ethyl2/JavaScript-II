// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
function drawPie() {
  return JSON.stringify("      (") + "\n" + JSON.stringify("   (  )  )")
  + "\n" + JSON.stringify("    ) ( )") + "\n" + JSON.stringify("    .....")
  + "\n" + JSON.stringify(" .:::::::::.") + "\n" + JSON.stringify("~\\_______/~") + "\n";
}
function piMaker(numPis) {
  let pi=Math.PI;
  function addX() {
    for (let i=0; i<numPis; i++) {
    console.log(i + " "  + drawPie());
    }
    return numPis * pi;
  }
  return addX(pi);
};
console.log("Here's my closure");
console.log(piMaker(3));


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  let count = 0;
  function counter() {
    count++;
    return count;
  }
  return counter;
  };
// Example usage: const myCounter = counterMaker();
const myCounter = counterMaker();
// myCounter(); // 1
console.log("myCounter: " + myCounter());
console.log("myCounter: " + myCounter());
console.log("myCounter: " + myCounter());
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const counterMaker2 = (limit) => {
  let count = 0;
  function counter() {
    count++;
    if (count > limit) {
      count = 1;
    }
    return count;
  }
  return counter;
}

const myCounter2 = counterMaker2(3);
// myCounter(); // 1
console.log("myCounter2: " + myCounter2());
console.log("myCounter2: " + myCounter2());
console.log("myCounter2: " + myCounter2());
console.log("myCounter2: " + myCounter2());
console.log("myCounter2: " + myCounter2());

// ==== Challenge 4: Create a counter function with an object that can increment
// and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: function() {
      //console.log("Here's the count: " + count);
      return count++;
    },
    decrement: function() {
      return count--;
    }
  }
};

const myCounter3 = counterFactory();
console.log("myCounter3: " + myCounter3.increment());
console.log("myCounter3: " + myCounter3.increment());
console.log("myCounter3: " + myCounter3.increment());
console.log("myCounter3: " + myCounter3.decrement());
console.log("myCounter3: " + myCounter3.decrement());
console.log("myCounter3: " + myCounter3.decrement());
