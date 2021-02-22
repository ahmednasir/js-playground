//bubbling
// document.querySelector("#grandparent")
// .addEventListener('click',()=>{
//     console.log("Grandparent clicked");
// },false)

// document.querySelector("#parent")
// .addEventListener('click',()=>{
//     console.log("Parent clicked");
// },false)


// document.querySelector("#child")
// .addEventListener('click',()=>{
//     console.log("Child clicked");
// },false)

// trickling or capturing
// document.querySelector("#grandparent")
// .addEventListener('click',()=>{
//     console.log("Grandparent clicked");
// },true)

// document.querySelector("#parent")
// .addEventListener('click',()=>{
//     console.log("Parent clicked");
// },true)


// document.querySelector("#child")
// .addEventListener('click',()=>{
//     console.log("Child clicked");
// },true)


// mix and match types
// document.querySelector("#grandparent")
// .addEventListener('click',()=>{
//     console.log("Grandparent clicked");
// },true)//capturing

// document.querySelector("#parent")
// .addEventListener('click',()=>{
//     console.log("Parent clicked");
// },false) //bubbling


// document.querySelector("#child")
// .addEventListener('click',()=>{
//     console.log("Child clicked");
// },true) //capturing


// how to stop propagation

document.querySelector("#grandparent")
.addEventListener('click',(e)=>{
    e.stopPropagation() //just add stop propagation
    console.log("Grandparent clicked");
},false)

document.querySelector("#parent")
.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log("Parent clicked");
},false)


document.querySelector("#child")
.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log("Child clicked");
},false)