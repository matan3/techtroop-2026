const validate = () => {
    const name = document.getElementById('name').value;
    const desiredSalary = document.getElementById('desiredSalary').value;
    const birthday = document.getElementById('birthday').value;
    const phone = document.getElementById('phone').value;
    const existingError = document.getElementById('error-message');
    
    if (existingError) {
        existingError.remove();
    }
    if (name.length <= 2) {
        return error("Name should be longer than 2 characters");
    }
    if (desiredSalary < 10000 || desiredSalary > 16000) {
        return error("Salary should be between 10000 to 16000");
    }
    if (!birthday) {
        return error("birthday is Missing");
    }
    if (phone.length !== 10) {
        return error("phone should be 10 digits");
    }
    success(name);
}

const success = name => {
    const container = document.getElementById('container');
    container.classList.add('hidden');
    const success = document.createElement('h1');
    success.setAttribute('id', 'success-message');
    success.innerText = `Welcome ${name}!`;
    document.body.appendChild(success);
}

const error = errorMessage => {
    const error = document.createElement('p');
    error.setAttribute('id', 'error-message');
    error.innerText = errorMessage;
    const container = document.getElementById('container');
    container.appendChild(error);
}

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', validate);