import { useState } from "react";
function Employee() {
let pname = useState("John");
let salary = useState(56000);
let age = 21;

let [pname1, setPname1] = useState("Steven");
let [salary1, setSalary1] = useState(58000);


let changeSalary = ()=>{
    setPname1("Mike");
    setSalary1(60000);
}
let changeAge = ()=>{
    console.log("Age button clicked");
    age = 25;
     setSalary1(65000);
    console.log("Age value is "+age);
}
return(
    <div>
        <h2>Employee component in function style</h2>
        <p>Employee name is {pname} and salary is {salary},Age is {age}</p>
        <p>Employee name is {pname1} salary {salary1}</p>
        <input type="button" value="Change Name" onClick={changeSalary}/>
        <input type="button" value="Change Age" onClick={changeAge}/>
    </div>
)

}

export default Employee;

