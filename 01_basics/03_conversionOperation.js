 //let score = 33
 //always get its type , as we do frontend req we dont know which type
 //const {score}= req.body
//let score ="33"
 //console.log(typeof score)
 //console.log(typeof (score))
  //but i know that all my operations will be on numbers
 // let valueInNumber = Number(score)//to convert Capital N
  //console.log(typeof valueInNumber)//number
// let score = "33abc"
//  let valueInNumber = Number(score)
//  console.log(typeof valueInNumber)//number , but it shouldnt have converted it
//  console.log(valueInNumber)//NaN => not a number
//so we can also check it like if value is equal to NaN , js bug u can say

// let score = null
// console.log(typeof score)
//  console.log(typeof (score))
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)//number
// console.log(valueInNumber)//0
// let score = undefined
// console.log(typeof score)
//  console.log(typeof (score))
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)//number
// // console.log(valueInNumber)
// let score = true
// console.log(typeof score)
//  console.log(typeof (score))
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)//number
// console.log(valueInNumber)// 1 in case of true and 0 in case of false
// let score = "atharva"
// console.log(typeof score)
//  console.log(typeof (score))
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)//number
// console.log(valueInNumber)//NaN
// 
// "33"=>33
// "33abc"=>NaN
// 
// let isLoggedIn=1;
// let boolLoggedIn= Boolean(isLoggedIn)
// console.log(typeof(boolLoggedIn))
// console.log(boolLoggedIn)
// let isLoggedIn="athu";
// let boolLoggedIn= Boolean(isLoggedIn)
// console.log(typeof(boolLoggedIn))
// console.log(boolLoggedIn)
// //1=>true , 0=>false
// //""=>false,"athu"=>true
 
// let someNumber= 33
// let stringNumber = String(someNumber)
// console.log(typeof stringNumber)
// console.log(stringNumber)//33
// *******Operations********
let value =3
let negValue= -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%2)
// let str1= "hello"
// let str2= " atharva"
// console.log(str1+str2)
// console.log("1"+2);//12
// console.log(1+"2")//12
// console.log("1"+2+2);//122
// console.log(2+2+"1");
// console.log(2+3+"1"+5)//515
console.log(true)//true
console.log(+true)//+ conerts it so output is 1
console.log(+"");//""=>false , + converts it to 0//=>0

let num1,num2,num3,num4
num1=num2=num3=num4=2+2
//dont do this
let gameCounter = 100
// console.log(++gameCounter);//101
// console.log(gameCounter++)//100

//101,101

//stack(primitive)=>value(copy) , heap(non - primitive)=>reference
