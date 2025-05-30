const registrationForm=document.getElementById("registratiomForm")
const validationmessage=document.getElementById("validationmessage")

function registerUser(event){
    event.preventDefault();
    const nameInput=document.getElementById("Name")
    const emailInput=document.getElementById("email")
    const ageInput=document.getElementById("age")
  

    if(nameInput.value.lenght < 2){
        validationmessage.innerHTML = "Your name is too short and should contain more than 1 character";
        return;
    }


     if(ageInput.value < 18){
        validationmessage.innerHTML = "You need to reach 18 years to sumbit this form";
        return;
    }

    validationmessage.value="";
    alert("Thank you for sumbiting form")
    registrationForm.reset();

}   

