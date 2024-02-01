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
const myFunction=
(a:string,b:string,c:string='man')=>{
    // console.log(c);
    // console.log(`hello $(a) $(b)`);
    // return undefined
    return a+b
}
myFunction('a','b','false')
// const myFunctionB=
// (a:number,b:number,c:string='man')=>{
//     // console.log(c);
//     // console.log(`hello $(a) $(b)`);
//     // return undefined
//     return a+b+c
// }
// myFunctionB('a','b','false')

// type aliases 

type stringOrNumber=string|number
type userType= {name:string;age:number}

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
// let userDetails: (id:number|string,userInfo:{name:string,age:number},z:string)=>void
// userDetails =(id:number|string,userInfo:{name:string,age:number},c:string)=>{
    
   

// }
// console.log (userDetails(4,6,'add'))

// type class 
// class player{
//     name:string;
//     age:number;
//     country:string
//     constructor(n:string,a:number,c:string){
//         this.name=n
//         this.age=a
//         this.country=c
//     }
//     play(){
//         console.log(`${this.name} from ${this.age} is playing!`);
//     }
// }

// const Maserati = new player('Maserati',34,'bangladesh')

// const Maserati = new player('Maserati','23','bangladesh')

// const players:string[]=[]

// const players:player[]=[]
// players.push('shakib')
// players.push(Maserati)


// type class Access Modifiers 
// class player{
//     private name:string;
//     private age:number;
//     private country:string
//     constructor(n:string,a:number,c:string){
//         this.name=n
//         this.age=a
//         this.country=c
//     }
//     play(){
//         console.log(`${this.name} from ${this.age} is playing!`);
//     }
// }

// const Maserati = new player('Maserati',34,'bangladesh')
// console.log(Maserati.name);

// const Maserati = new player('Maserati','23','bangladesh')

// const players:string[]=[]

// const players:player[]=[]
// players.push('shakib')
// players.push(Maserati)

// import {player} from './src/classes/player';
// const Maserati = new player('Maserati',34,'bangladesh')
// console.log(Maserati.name);

// const Maserati = new player('Maserati','23','bangladesh')

// Interface type 
// interface RectangleOptions{
//     width:number,
//     length:number
// }
// function drawRectangle(options:{
//     width:number,
//     length:number
// }){
// function drawRectangle(options:RectangleOptions){
//     let width =options.width;
//     let length =options.length
// }
// let threeOptions={
    
//         width:30,
//         length:40,
//         hight:10
    
// }
// drawRectangle(threeOptions)


// Generics type 

// const addID =<T extends {
//     name:string;
//     age:number;
// }
// >( 
//     obj:T)=>{
//     let id =Math.floor(Math.random()*100)
//     return{...obj,id}
// }
// let user =addID({
//     name:'Masrafi',
//     age:40
// })
// // let user='nanua'
// addID(user)

// ENUM type 

// enum RType{SUCCESS,FAILURE}
// inteerface APIResponse<T>{
//     status:number;
//     type:RType;
//     data:T
// }
// const response1:APIResponse<string>={
//     status:200,
//     type:RType,
//     data:'test'
// }

// let a =[3,'HELLO',{p:3}]
// // a[0]='3'
// // a[0]=false
// let b:[number,string,object]=[4,'go',{t:8}]
// b[1]='gobo'