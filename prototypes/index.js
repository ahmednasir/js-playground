// JS engine attaches some hidden property objects to user's object. This is called prototypical inheritance

// Everything is JS is object

let object = {
    name: "Akshay",
    city: "Delhi",
    getIntro: function () {
        console.log(`${this.name} ${this.city}`)
    }
}

let object2 = {
    name: "Nasir"
}

//never do this
object2.__proto__ = object;
console.log(object2.city) //Delhi

// whenever we write the above line, it will first check 'city' in "object2"
// if it is not there, the it will search in "__proto__" and then so on...
