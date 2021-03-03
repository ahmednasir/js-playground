// sum(1)(2)(3)......(n)

let sum = (a)=>{
    return (b)=>{
        return b?sum(a+b):a
    }
}
//or

let sum2 = a=>b=>  b?sum(a+b):a

console.log(sum(1)(2)(3)(4)())
console.log(sum2(1)(2)(3)(4)())

