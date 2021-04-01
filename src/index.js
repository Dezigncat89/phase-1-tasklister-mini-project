//Event Listner for clicks and Prevent Default
document.addEventListener('DOMContentLoaded', () => {
            let load = document.getElementById('load');
            load.addEventListener('click', () => {
                console.log('clicked');
                        
form.addEventListener('submit', (addEvent) => {
    addEvent.preventDefault();
});
 
//Prevents Invalid Form Characters
 function error1(input, message) {
    input.className = 'error';
    
    const error1 = input.previousElementSibling;
    error1.innerText = message;
    return false;
}
form input.error1 {
    border-color: #e74c3c
}
const error1 = input.previousElementSibling;
error1.innerText = message;
                        
function success(input) {
    input.className = 'success';
   
    const error1 = input.previousElementSibling;
    error1.innerText = '';
    return true;
}
form input.success {
    border-color: #c3e6cb
}
function requireValue(input, message) {
    return input.value.trim() === '' ?
        error1(input, message) :
        success(input);
}
const form1 = document.getElementById('text');
                        
const letters = form.elements[0];
const fields = [
    {input: letters, message: 'Invalid Characters'}
];
 form.addEventListener('submit', (event2) => {
    let validate = true;
    requiredFields.forEach((input) => {
        validate = requireValue(input.input, input.message);
    });
    if (validate) {
        validate = validateText(text);
    }
   
    if (!validate) {
        event2.preventDefault();
    }
});


                        
              
              




       
