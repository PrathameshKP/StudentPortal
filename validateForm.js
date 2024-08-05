document.addEventListener("DOMContentLoaded", () => {
    let formValidation = document.getElementById("formValidation");

    formValidation.onsubmit = (event) => {
        event.preventDefault();

        let name = document.getElementById('username').value;
        let namePattern = /^[A-Za-z']{2,10}$/;
        if (name === '') {
            document.getElementById('namespan').innerHTML = "Please Enter name";
            return false;
        } else if (!name.match(namePattern)) {
            document.getElementById('namespan').innerHTML = "Please Enter Character only";
            return false;
        } else {
            document.getElementById('namespan').innerHTML = "";
        }

        let id = document.getElementById('id').value;
        if (id === '') {
            document.getElementById('idspan').innerHTML = "Please Enter ID";
            return false;
        } else {
            document.getElementById('idspan').innerHTML = "";
        }

        let address = document.getElementById('address').value;
        if (address === '') {
            document.getElementById('addressspan').innerHTML = "Please Enter Address";
            return false;
        } else {
            document.getElementById('addressspan').innerHTML = "";
        }

        let password = document.getElementById('pass').value;
        let passPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
        if (password === '') {
            document.getElementById('passspan').innerHTML = "Please enter password";
            return false;
        } else if (!password.match(passPattern)) {
            document.getElementById('passspan').innerHTML = "Password must contain 1 character, 1 digit, 1 special symbol, and be 6-12 characters long";
            return false;
        } else {
            document.getElementById('passspan').innerHTML = "";
        }

        let mobile = document.getElementById('mobile').value;
        let mobilePattern = /^[6-9]{1}[0-9]{9}$/;
        if (mobile === '') {
            document.getElementById('mobilespan').innerHTML = "Please enter mobile number";
            return false;
        } else if (!mobile.match(mobilePattern)) {
            document.getElementById('mobilespan').innerHTML = "Please enter number only of 10 digits";
            return false;
        } else {
            document.getElementById('mobilespan').innerHTML = "";
        }

        let male = document.getElementById('male').checked;
        let female = document.getElementById('female').checked;
        if (!male && !female) {
            document.getElementById('genderspan').innerHTML = "Please select any one option";
            return false;
        } else {
            document.getElementById('genderspan').innerHTML = "";
        }

        formValidation.submit();
    };
});
