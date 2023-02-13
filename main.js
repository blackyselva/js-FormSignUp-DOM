let form1 = document.querySelector("#form");
let name1 = document.querySelector('#name');
let number1 = document.querySelector("#number");
let email = document.querySelector("#email");
let submit = document.querySelector("#btn");
let error = document.querySelector("#result");

form1.addEventListener('submit', function(e){
    e.preventDefault();
    
    if (!/^[a-zA-Z]+$/.test(name1.value)) {
        error.style.display = "block";
        error.textContent = "Please fill first input out of the Only letters.";
    } else if (!/^[0-9]+$/.test(number1.value)) {
        error.style.display = "block";
        error.textContent = "Please fill out the Number input field.";
    } else {
        error.style.display = "none";
    }
});
