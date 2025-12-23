// let users = new Set();
// users.add("Ravi")
// users.add("Ramesh");
// users.add("Lokesh");
// users.add("Lokesh");
// users.add({id:100,name:"John"});
// console.log(users.size)
// console.log(users)
// let weakUsers = new WeakSet();
// //weakUsers.add("Ravi");
// weakUsers.add({id:101,name:"raj"})
// console.log(weakUsers)

let activeUsers = new WeakSet();
let user1 = {name:"Akash"}
let user2 = {name:"Vikash"}
let user3 = {name:"Jyothi"}
activeUsers.add(user1)
activeUsers.add(user2)
console.log(activeUsers.has(user1))
console.log(activeUsers.has(user3))
    user1=null; // link lost or disconnect for that app
console.log(activeUsers.has(user1))
console.log(activeUsers.has(user2))
