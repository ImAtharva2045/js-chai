// console.log(2>1)
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">5);//true
// console.log("02">1);//true
//but always take same datatypes as not always predicatable results

console.log(null>0)//false
console.log(null==0);//false
console.log(null>=0);//true
//very unpredictable results , the reason is comparaison <,>
//<=,>= converts null to 0 but equality i.e == doesnt
//== or === works in different way as of comparison
// console.log(undefined==0)
// console.log(undefined<0)
// console.log(undefined>0)
// console.log(undefined>=0)
//all gives false
//strict check ,=== also checks the datatype
console.log("2"===2);//as === and data type is different


