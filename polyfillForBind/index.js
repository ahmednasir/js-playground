//todo: Define our own bind method instead of using system's


let name = {
    firstName:"Nasir",
    lastName:"Ahmed"
}

let printName = function(homeTown){
    console.log(`${this.firstName} ${this.lastName} ${homeTown}`)
}

// generic bind method
let printMyName = printName.bind(name,"Barpeta")
printMyName()



/**
 * REAL DEAL STARTS HERE
 * If we keep any method in Function.prototype method, 
 * then each and every method will have access to that method
 */

Function.prototype.mybind = function(...args) {  
    //...args consists of the arguments
    // this -> points to printName method
    let context = this;
    params = args.slice(1); // getting the parameters
    
    return function(...args2){
        context.apply(args[0], [...params,...args2])
    }
}

let printMyName2 = printMyName.mybind(name,"GU")
printMyName2()