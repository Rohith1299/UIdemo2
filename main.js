
function Login(){
    var pwd="rohith";
    var user="rohith";
    var Username=document.getElementById("username").value;
    var Password=document.getElementById("password").value;
    if(Username==user && Password==pwd)
    {
        window.location.href="./dashboard.html";
        console.log("Your username is " + Username + " Your password " + Password);
    }
    else {
        alert("No Shows Available")
    }
    
    
}