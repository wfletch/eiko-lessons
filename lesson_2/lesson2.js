//  There are three ways to create a variable in js. This is beacuse of how we manage scope.

// The 'var' way.

// IF a variable is defined with var outside of a function. Then it has global scope

var first_name = "Warren" // first_name has global scope
function global_print_name() {
    console.log("Entered Global Print Name")
    // Because first_name has global scope, we can use it from anywhere!
    console.log(first_name)
    // We can also change it from anywhere!
    first_name = "Eiko"
    console.log(first_name)
    console.log("Exited Global Print Name \n")
    // Aside. It's always good to look at what a function does!
    // In this case, the function 'global_print_name' actually prints first_name. then changes it to first_name and prints it again!
}
function local_print_name() {
    console.log("Entered Local Print Name")
    let first_name = "James" // We can DO WHATEVER WE WANT in here and it will not impact what occurs outside!
    // We are now creating a new variable and assigning it the value "James". This variable
    console.log(first_name)
    // We can also change it from anywhere!
    first_name = "Eiko"
    console.log(first_name)

    // Aside. It's always good to look at what a function does!
    // In this case, the function 'print_name' actually prints first_name. then changes it to first_name and prints it again!
    console.log("Exited Local Print Name ")
}
console.log("The Variable'first_name' at the beginning is: " + first_name  + "\n")
global_print_name()
console.log("The Variable'first_name' after running Global Print Name is: " + first_name + "\n")
local_print_name()
// Even though we are changing first_name variable  in the function local_print_name. It does not change the variable which exists in the global context.
console.log("The Variable'first_name' after Local Print Name is: " + first_name + "\n")


// ASIDE

const FIRST_NAME = "Warren" // can never be changed. We normally style constants in ALL_CAPS.
// However, const's behave like normall variables. so they can also be scoped!

// FIRST_NAME = "Steve" // < -- will throw an error


// More information : https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
