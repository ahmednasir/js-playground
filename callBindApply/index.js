
/**
 * call method = function borrowing
 * 
 * borrow funtion of other objects and use it with other objects
 */

let name ={
    firstName:"Nasir",
    lastName:"Ahmed", 
    
}

const printFullName = function(homeTown, state){
    console.log(this.firstName+" "+this.lastName+" "+homeTown+" "+state)
}

printFullName.call(name, "Delhi")

let name2 = {
    firstName:"Risan",
    lastName:"Lol"
}

printFullName.call(name2, "Mumbai")

printFullName.apply(name2,["Mumbai", "Maharashtra"])




/**
 * Difference between apply and call and bind.
 * Call:
 *      Arguments are passed in comma separated format.
 * Apply:
 *      Arguments are passed in list format.
 * Bind:
 *      Same as call, but it binds to a method and assigned to a variable which can be used to invoke the method later.
 *      Creates a copy of the function.
 */

 let printMyName = printFullName.bind(name2,"Mumbai","Maharashtra");

 printMyName()