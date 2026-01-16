let names = ["raj","ravi","ajay","vikash","mahesh","lokesh"]
console.log("before sort")
for(let name of names){
    console.log(name)
}
names.sort((name1,name2)=>name1.localeCompare(name2));
console.log("")
console.log("after sort - Asc")
for(let name of names){
    console.log(name)
}
names.sort((name1,name2)=>name2.localeCompare(name1));
console.log("")
console.log("after sort - desc")
for(let name of names){
    console.log(name)
}