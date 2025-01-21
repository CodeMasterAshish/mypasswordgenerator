const passwordBox = document.getElementById("password");
const lengthInput = document.getElementById("digit");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    const length = parseInt(lengthInput.value);

   
    if (isNaN(length) || length < 4) {
        alert("Enter length greater than 4");
        document.getElementById("digit").value=-"";
        return;
    }

    let password = "";

   
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

   
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    passwordBox.value = password;
}
