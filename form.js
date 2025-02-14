document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
    const name = document.getElementById('user');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('num');
    const password = document.getElementById('pass1');
    const confirmPassword = document.getElementById('pass2');

   
    name.style.border = '';
    email.style.border = '';
    phoneNumber.style.border = '';
    password.style.border = '';
    confirmPassword.style.border = '';

   
    if (name.value === '') {
        document.querySelector('.p1').innerText = 'Name is required.';
        name.style.border = '1px solid red';
        isValid = false;
    } else {
        document.querySelector('.p1').innerText = '';
        name.style.border = '1px solid green';
    }


    if (email.value === '') {
        document.querySelector('.p3').innerText = 'Email ID is required.';
        email.style.border = '1px solid red';
        isValid = false;
    } else {
        document.querySelector('.p3').innerText = '';
        email.style.border = '1px solid green';
    }

    if (phoneNumber.value === '') {
        document.querySelector('.p4').innerText = 'Phone number is required.';
        phoneNumber.style.border = '1px solid red';
        isValid = false;
    } else {
        document.querySelector('.p4').innerText = '';
        phoneNumber.style.border = '1px solid green';
    }

  
    if (password.value === '') {
        document.querySelector('.p5').innerText = 'Password is required.';
        password.style.border = '1px solid red';
        isValid = false;
    } else {
        document.querySelector('.p5').innerText = '';
        password.style.border = '1px solid green';
    }

   
    if (confirmPassword.value === '') {
        document.querySelector('.p6').innerText = 'Confirm password is required.';
        confirmPassword.style.border = '1px solid red';
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        document.querySelector('.p6').innerText = 'Passwords do not match.';
        confirmPassword.style.border = '1px solid red';
        isValid = false;
    } else {
        document.querySelector('.p6').innerText = '';
        confirmPassword.style.border = '1px solid green';
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});
