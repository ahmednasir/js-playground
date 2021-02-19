let multiply = function(x,y){
    console.log(x*y)
}

// binding the multiply method and set the value "x" to 2
let multiplyByTwo = multiply.bind(this,2)


//this method is called function currying 
// copy a method and make more method out of it
multiplyByTwo(3)

let multiplyByTwo2 = multiply.bind(this,2,3)
// it wil permanently set x=2, y=3 

multiplyByTwo2(7) // output: 6 because it ignore 7


let multiplyByThree = multiply.bind(this,3)

multiplyByThree(8)


/**
 * doing using the closures
 */


let multiplyClosure = function(x){
    return function(y){
        console.log(x*y)
    }
}

let multiplyByTwoClosure = multiplyClosure(2)

multiplyByTwoClosure(9)