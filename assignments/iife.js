// Stretch: Look up what an IIFE is in JavaScript and experiment with them:

console.log("In IIFE Section: ");

//IIFE = Immediately-Invoked Function Expressions
//let iifeSection = document.getElementsByClassName("iife")[0];
window.onload = function() {
let iifeSection = document.getElementById("iife");
iifeSection.innerHTML = "<p><strong>'An IIFE (Immediately Invoked Function Expression) \
is a function that runs as soon as it is defined.'</strong> It has 2 parts: the anonymous function \
and the () to call it. It doesn't return the function or allow access to any inner variables, \
only returns the specified value.</p>";

iifeSection.innerHTML += "<p>Advantages to IIFEs</p><ol><li>They are good for hiding variables \
-- the variables are only accessible inside the function. You can wrap variables \
that were initially global inside an IIFE and control what comes out.</li> \
<li>IIFEs can take arguments when they are invoked, which can be handy with jQuery and other libraries.</li></ol>";
}

let talk = (function() {
    console.log("I was invoked immediately");
})();
// "I was invoked immediately"

let sayName = (function () {
    let name = "Zelda"; 
    return name; 
})(); 

// Immediately creates the output: 
console.log(sayName); // "Zelda"

// With function declarations: Add an "!", "+", "-", "~" or "void" before function.

/* Whenever JavaScript sees function keyword as the first word in a 
valid statement, it expects that a function definition is going to take place. 
So to stop this from happening, we are prefixing “!” in-front of the function 
keyword on line 1. This basically enforces JavaScript to treat whatever that’s
 coming after “!” as an expression.*/ 

 //https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6

 void function shoutName() {
    let name = 'Mortimer';  
    console.log(name.toUpperCase() + "!!!!!!!!!!!");
 }();

 // 2 slightly different styles where () are placed differently:
 // Variation 1
(function() {
    console.log("I am an IIFE!");
}());


// Variation 2
(function() {
    console.log("I am an IIFE, too!");
})();

//Doesn't work to leave the () out:
/*function() {
    console.log("I am an IIFE, three!");
}();
*/

//Using arguments:

(function IIFE(myStr, whichCase) {
    if (whichCase ===  "upper") {
        console.log(myStr.toUpperCase());
    } else {
        console.log(myStr.toLowerCase());
    }
}("Headless carp!", "upper"));

//Example inspired by one in the link above about returning an object:

var Sequence = (function sequenceIIFE() {
    
    // Private variable to store current counter value.
    let current = 0;
    
    // Object that's returned from the IIFE.
    return {
        getCurrentValue: function() {
            return current;
        },
        
        getNextValue: function() {
            current++;
            return current;
        },
        getPrevValue: function() {
            current--;
            return current;
        }
    };
    
}());

console.log(Sequence.getNextValue()); // 1
console.log(Sequence.getNextValue()); // 2
console.log(Sequence.getCurrentValue()); // 2
console.log(Sequence.getPrevValue()); // 1