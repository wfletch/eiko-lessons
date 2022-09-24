// When a js file is loaded. all code is executed
// All variables which are declared are stored in the appropriate scope. Same with Methods!

// For example. All these variables will be set

let name = "Warren" // DEV DOCS - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
var last_name = "Fletcher" //DEV DOCS - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
var last_name = "Hmm?"; 
var last_name = "We can redeclare this as many times as we want.";
var last_name;
console.log(last_name)

// Var is very strange. It's good to get used to reading developer.mozila.org docs (FOR JAVASCRIPT)

// However, we cannot duplicate a 'let' variable. They can only be created ('let') once!
// let name = "Another Name" // <- Will result in an error!

// Ok, let's have some fun with scope

function f1() {
    // Anything DEFINED in here is locked to the scope of f1()
    function f2() {
        
    }
}