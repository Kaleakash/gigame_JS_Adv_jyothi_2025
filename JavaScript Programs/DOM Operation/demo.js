function readData(){
    //alert("Button Clicked");
    // read the text field value using name attribute 
    // var fname = document.getElementsByName("fname")[0].value;
    // alert("Welcome user "+fname);
    // read the text field value using id attribute
    var pTagValue = document.getElementsByTagName("p")[0].innerHTML
    var fname = document.getElementById("n1").value;
    //alert("Welcome user "+fname);
    document.getElementById("n2").value=fname;
    document.getElementById("n1").value="";
    document.getElementsByTagName("div")[0].innerHTML="Welcome user "+fname;
    let h1TagRef = document.createElement("h1");  // <h1></h1>
    let h1TagContent = document.createTextNode(pTagValue); // p tag value 
    h1TagRef.appendChild(h1TagContent); // <h1>Welcome to Simple HTML Web Page</h1>
    document.getElementsByTagName("body")[0].appendChild(h1TagRef);  // child of body tag 
}