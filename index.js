//https://www.youtube.com/watch?v=W8AeMrVtFLY

// THE CALL STACK

// its fundamental to how JS works
//its really helpful when debugging code, chrome, firefox, and every browser
    // has built in call stack debugging tools, so u can see what's happening at any point
    // with the call stack

// it does come up with interviews

// What is the call stack?

// todo list of function invocations, so if u have an app u call func the last line of app
    // that func call might result in 5 other func and each of those might have cascading 
    // function calls and they might be waiting on results of future calls to come back
    // until our final og function call finishes so JS can basically only do 1 thing at a time
    // its mainly single threaded, something called thread pooling that happened
    // JS needs to keep track of the history of things, a list of what is waiting to be returned
    // which funcs have been invoked but arent done yet
    // thats what call stack is, its a structure that stores it (like a to do list)

// the reason its called a stack btw is that its a common Data structure, and the way
    //that stack works is that its a last in first out structure

// so think of it like a pile of books
    //If u want to add a book to a stack u add it to the top, u dont do it from the bottom
    // if u want to remove u remove from top

//function invocation is a new function that foes not make the function run, no function call
    // ex:

/* function: something // #3
function: multiply // #2
function: main //#1 */

// our call stack takes note of that, but it actually calls multiply, and our func multiply
    // for some reason calls annother func called something so these are all added to the stack
    // last thing added to the top (function:something) gets taken off 1st.
//Last in first off

// How your code changes the stack
//Whenever u invoke a func, the details of the function call (invocation) are saved to the top of the stack (pushed to top)
// when any function returns, the info about the invocation is taken off the top of the stack (popped off the top)

// Stack Example

function multiply(x, y) {
    return x * y;
}

var res = multiply(3,5);

// whats added to the stack?^
// the var res = multiply(3,5); (the main func)
// that means we need to add a stack frame to the top of our stack (return x * y;)
// then remove it top from bottom

//stack Frame contents

// the function that was invoked
// The params that were passed to the func
// current line num

function firstThing() {
    return "FIRST THING";
}
function secondThing(){
    return firstThing() + "SECOND THING";
}
secondThing();

// in the chrome developer tools to go to debugger go to sources, and click on button that looks like play
// and close everything except for call stack

// the call stack adds lines 71-65 from bottom to top, and when they are returned they are 
    //popped off from top to bottom

function firstThing(){
    secondThing();
};

function SecondThing(){
    firstThing();
};

secondThing();

// This gives an error that says "Maximum call stack size exceeded"
    // we exceeded the # of frames that chrome allows us to have in the call stack because
    // nothing was ever being returned, we just constantly add books/frames and nothing was being popped off
    // in chrome max call stack size is 16,000 times
    //common error especially when talking about recursion

// STACK DEFINITION SUMMARY
// an ordered set of stack frames (just a bunch of todo list for function calls or invocations)
// Most recently invoked function is on the top of the stack
// The bottom of the stack is the 1st function invoked
// the stack is processed from top to bottom