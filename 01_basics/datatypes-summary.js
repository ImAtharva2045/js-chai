// on the basis of how data is kept in memory in accesed they are of 2 types
// # primitive
// 7 categories:all done call by value
//1. String,Number ,Boolean,null,undefined,Symbol,BigInt
//js is dynamically typed language
// in typescript we write like this const score:Number=100
//# reference or non -primitive
//arrays, objects,functions,//there data type is object
// //

// const score =100.3//number
// const isLoggedIn=false
// const outsideTemp = null
// let userEmail;

// const id= Symbol("123")//makes it unique
// const anotherId = Symbol("123")

// console.log(id);
// console.log(anotherId)
// console.log(id===anotherId)//but there return value is not same

// const bigNumber= 4638264829027834n//in last write n to make it BigInt

// //# reference or non -primitive
// //arrays, objects,functions
// //
// //arrays
// const heroes=["spiderman","superman","deadpool"];

// let myObject = {
//     name:"atharva",
//     age:18,
// }
// //function as a variable
// const myFunction = function(){
//     console.log("Hello World");
// }
// myFunction();

// console.log(typeof bigNumber)

// console.log(typeof x)//undefined,but here x is not even declared
// console.log(typeof null)//object
// console.log(typeof myFunction);//it return functionn , but it is called function object
// console.log(typeof myObject)//object
// console.log(typeof heroes)//object
// console.log(typeof id) //symbol

let myYoutubeChanneName = "AtharvaSawale"

let anotherName = myYoutubeChanneName;
anotherName= "chaiaurcode"
console.log(myYoutubeChanneName)
console.log(anotherName)

let userOne ={
    email:"user@gmail.com",
    upi:"user@ybl",
}
let userTwo=userOne
userTwo.email="utya@yahoo.com"
console.log(userTwo.email)
console.log(userOne.email)