var formSubmitbtn = document.querySelector("#submit-button");
var firstNameEl = document.querySelector("#first-name");
var lastNameEl = document.querySelector("#last-name");
var emailEl = document.querySelector("#email");
var passwordEl = document.querySelector("#password");

function handleFormSubmit(event) {
    event.preventDefault();

    var firstName = firstNameEl.value;
    console.log(firstName)

    var lastName = lastNameEl.value;
    console.log(lastName)

    var email = emailEl.value;
    console.log(email)
    
    var password = passwordEl.value;
    console.log(password)
}

formSubmitbtn.addEventListener('click', handleFormSubmit);