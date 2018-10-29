/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. var, let, and const 
// var can be reassigned, global and local scoped
// let can be reassigned, and is block scoped
let letVar = 2; // prints => 2
// const can NOT be reassigned and block scoped
const constVar = 3; // prints => 3

// 5. hoisting
// - variable and function declaration
// - taken to the top of their scopes
// - different types hoisted differently
   // - variables: Only name
    // - functions: Name and body
// Happens at runtime

function functionName() {
    if (name === undefined)
    name = 'Isaak';
}
var name;
