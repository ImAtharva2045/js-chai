const name = "hitesh"
const repoCount= 50

console.log(name+ repoCount+" value")//not nice in todays world
//string inetpolation
console.log(`Hello my name is ${name}, and my repo count is ${repoCount}`);
//another way to declare string with the help of constructor

const gameName = new String("Maticks-as")
//string as a object
//in prototype in console , diff diff string methods are also given
console.log(gameName[0])
console.log(gameName.__proto__)//,we are accesing prototype =>{}=>its not a empty object
console.log(gameName.length)//7 =>not a function
console.log(gameName.toUpperCase())//but it has not changed the original string , as it is stored in stack
console.log(gameName.charAt(5));//k
console.log(gameName.indexOf('t'))
const newString =gameName.substring(0,4)
console.log(newString)
//in slice negative values can be given
//-10 -9 -8 -7 -6 -5 -4 -3 -2 -1 ,#Matick-as
const anotherString = gameName.slice(-9,4)
console.log(anotherString)

const newStringOne= "  hitesh  "
console.log(newStringOne)
console.log(newStringOne.trim());//removes the starting and ending spaces,also works on line terminators,\n

const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20","-"))//https://hitesh.com/hitesh-choudhary
console.log(url.includes("hitesh"))//gives true

const neeeew=new String("athu-com-hi-bye-seeya")

//if u want to convert ur string into arrays, but the question is basedon what so?

console.log(neeeew.split("-"))//=>[ 'athu', 'com', 'hi', 'bye', 'seeya' ]

// toUpperCase(),makes it UpperCase,charAt(idx),indexOf(char),trim()=>removes spaces and \n,replace(to be replaced,replaced with),includes(substring)=>returns boolean,split(seperator) into an array