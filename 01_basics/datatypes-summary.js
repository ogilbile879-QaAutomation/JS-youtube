//Primitive
/*
7 Types
String
Number
Boolean
null
undefined
Symbol
BigInt

*/

//Non Primitive /Reference
//Array , object, functions

const score =100
const scoreValue=100.3
const isLoggedIn=false
const outSideTemp = null
let userEmail;

const id=Symbol('123')
const anotherId = Symbol('123')

console.log(id=== anotherId);
const bignumber=1234567879n
console.log(bignumber);

const heros=["shaktiman","naagraj","doga"]
let myobj={
    name:"omkar",
    age:23,

}
const myFunction=function(){
    console.log("hello world");
}


/*
stack and heap memory locations
stack(Primitive) ,Heap(Non Primitive)
*/
let myYoutubename = "hiteshchoudharidotcom"
let anothername = myYoutubename
anothername = "chaiAurCode"

console.log(myYoutubename);
console.log(anothername);


