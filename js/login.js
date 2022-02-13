
document.getElementById('login-button').addEventListener('click',function(){
    // get email field text
    const emailField = document.getElementById("email-input");
    const emailFieldText = emailField.value;

    // get password field text
    const passwordField = document.getElementById("password-input");
    const passwordFieldText = passwordField.value;

    // compare email & password

    if (emailFieldText == 'faysal@gmail.com' && passwordFieldText == 'password'){
        window.location.href = '/banking.html';
    }


})