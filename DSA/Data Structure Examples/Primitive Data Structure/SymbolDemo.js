// let id = Symbol();
// let num = 100;
// let id1 = Symbol("100")
// console.log(id)
// console.log(typeof id)
// console.log(num)
// console.log(typeof num)
// console.log(id1)
// let id1=Symbol("100")
// let id2 =Symbol("100")
// let id3=100;
// let id4=100;
// console.log(id1==id2)
// console.log(id3==id4)

let id1 = Symbol("id");
let id2 = Symbol("id")
// // literal style object creation 
let user1 = {
    name:"Ravi",
    [id1]:100
}
let user2 = {
    name:"Ravi",
    [id2]:100
}
// let user3 = {
//     name:"Ravi",
//     id:102
// }
// let user4 = {
//     name:"Ravi",
//     id:104
// }
// console.log(id1==id2)
// console.log(user1)
// console.log(user2)
// console.log(user1[id1]==user2[id2])
// console.log(user3.id==user4.id)

let token = Symbol("token")
let user5  = {
    name:"Raj",
    age:21,
    [token]:"abc1345667"
}
console.log(user5)
for(let key in user5){
    console.log(key)
}
// let id1 = Symbol(100)
// let id2 = Symbol(101)
// let id3 = Symbol(100)
// console.log(id1==id3)