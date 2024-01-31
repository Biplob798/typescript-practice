"use strict";
// const country='i love Bangladesh'
// console.log(country);
// let playerName='Masai'
// let age =34
// age='sakib'
// console.log(playerName);
// playerName=24
// console.log(playerName);
// function multiply(a:number,b:number){
//     return a*b
// }
// console.log(multiply(3,4));
// Array 
//  let fruits=['apple','banana']
//  fruits.push(34)
//  let mixed=['apple','banana',3,true,{}]
//  mixed.push({
//     name:'shakib'
//  })
// object 
//  let person ={
//     name:"Masai",
//     age:34,
//     isCaptain:true
//  }
//  person.name=[23]
// let a: string
// a=5
// a='mamun'
// let b: number
// b=5
// b='mamun'
// array 
// let a:string[]=[]
// a.push(5)
// a.push('babu')
// a.push('babu')
// normal variable 
// let b:string|number
// b='maun'
// let a:(string | number)[]=[]
// a.push(5)
// a.push('babu')
// a.push('babu')
// a.push('mamun',4,true)
// object 
// let c:object
// c=[]
// let c:{
//     name:string,
//     age:number,
//     adult:boolean
// }
// c={
// name:'na',
// age:12,
// adult:"true"
// }
// dynamic or any type 
// let a:any
// //  let a:string
// a=5
// a='raga'
// let a:any[]=[]
// a.push(5)
// a.push(true)
// // object 
// let b:{
//     name:any,
//     age:any
// }
// b={
//     name:'bangladesh',
//     age:34
// }
// const myFunction=()=>{
//     console.log('hello');
// }
// let myFunction:Function
//  myFunction=()=>{
//     console.log('hello');
// }
// myFunction=5
// c?:string
const myFunction = (a, b, c = 'man') => {
    // console.log(c);
    // console.log(`hello $(a) $(b)`);
    // return undefined
    return a + b;
};
myFunction('a', 'b', 'false');
// const userDetails =(
//     id:string|number,
//     user:{name:string,age:number}
// )=>{
//     console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
// }
// const sayHello =(user:{name:string; age:number})=>{
//     console.log(`hello ${user.age >50? "sir":'mr.'} ${user.name} `);
// }
// const userDetails =(
//     id:stringOrNumber,
//     user:userType
// )=>{
//     console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
// }
// const sayHello =(user:{name:string; age:number})=>{
//     console.log(`hello ${user.age >50? "sir":'mr.'} ${user.name} `);
// }
// let myFunction: (x:string,y:string)=>void
// let add: (x:number,y:number)=>number
// add =(a:number,b:number)=>{
//     return a+b
//     console.log(a+b);
// }
// let calculation: (x:number,y:number,z:string)=>number
// calculation =(a:number,b:number,c:string)=>{
//     if(c==='add'){
//         return a+b
//     }
//    else{
//     return a-b
//    }
//     // console.log(a+b);
// }
// console.log (calculation(4,6,'add'))
let userDetails;
userDetails = (id, userInfo, c) => {
};
console.log(userDetails(4, 6, 'add'));
