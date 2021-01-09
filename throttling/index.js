/**
 * 1. Used for rate limiting the function execution.
 * 2. Performance optimisation.  
 */

let count = 0;




const expensiveFunction = ()=>{
    console.log("Expensive Function", count++)
}

const throttledFunction = (fn, limit)=>{
    let flag = true;
    return function(){
        let context = this, args =arguments;
        if(flag){
            fn.apply(context, args);
            flag = false;
        }
        setTimeout(()=>{
            flag = true;
        },limit)
    }
}

const betterExpensiveFunction = throttledFunction(expensiveFunction, 2000)

window.addEventListener('resize',()=>{
    betterExpensiveFunction();
})