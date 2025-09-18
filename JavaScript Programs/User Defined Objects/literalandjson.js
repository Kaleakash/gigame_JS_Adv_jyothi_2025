    let emp1 = {id:100,fname:"Jyothi",salary:45000};
    let emp2 = {"id":101,"fname":"Kavitha","salary":55000};
document.writeln(emp1.fname+"<br>");
document.writeln(emp2.fname+"<br>");
let empString = JSON.stringify(emp1);       // it converts object to string
document.writeln(empString+"<br>");
document.writeln(empString.fname+"<br>");
let empJson = JSON.parse(empString);       // it converts string to object
document.writeln(empJson.fname+"<br>");
