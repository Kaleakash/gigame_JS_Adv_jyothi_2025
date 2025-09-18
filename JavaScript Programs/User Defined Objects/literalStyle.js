let emp1 = {id:100,fname:"John",lname:"Doe",salary:25000,display:function(){
    return this.id+" "+this.fname+" "+this.lname+" "+this.salary;
}};
document.writeln("Employee Details: <br>");
document.writeln(emp1.display());
document.writeln("<br>");
document.writeln("-----------------------------");
document.writeln("<br>");
document.writeln(emp1.id+" "+emp1.fname+" "+emp1.lname+" "+emp1.salary);  
let emp2 = {id:101,fname:"Jane",lname:"Doe",salary:30000.50,skillSet:["Java","JavaScript","HTML","CSS"]
    ,address:{city:"New York",state:"NY",country:"USA"},
    projects:[
        {pId:1,pName:"Project A",duration:"6 months"},
        {pId:2,pName:"Project B",duration:"3 months"},
        {pId:3,pName:"Project C",duration:"1 year"}
    ]
};
document.writeln("<br>"+emp2.id+" "+emp2.fname+" "+emp2.lname+" "+emp2.salary);
document.writeln("<br>Skills: "+emp2.skillSet);
document.writeln("<br>Address: "+emp2.address.city+" "+emp2.address.state+" "+emp2.address.country);
document.writeln("<br>Projects: ");
for(let i=0;i<emp2.projects.length;i++){   
    document.writeln("<br>"+emp2.projects[i].pId+" "+emp2.projects[i].pName+" "+emp2.projects[i].duration);
}
