var form = document.getElementById("ACM_Form")
console.log(form)

form.addEventListener("submit",function(event){
    event.preventDefault();
    var name = form.elements["name"].value
    var email = form.elements["email"].value
    var age = form.elements["age"].value
    console.log(name)
    console.log(email)
    console.log(age)
    if (age<=17){
        alert("You can't join ACM")
    }else if (age>=18 && age <=50){
        alert("You have succesfully joined ACM")
    }else if(age>50){
        alert("You can't join ACM")
    }
});