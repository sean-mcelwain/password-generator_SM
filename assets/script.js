const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specials = "!@#$%^&*()_+=";

const pwEl = document.getElementById("password");
const generateBtn = document.getElementById("generate");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const specialEl = document.getElementById("special");


function getLowercase() {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
function getUppercase() {
    return upperCase[Math.floor(Math.random() * upperCase.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getspecial() {
    return specials[Math.floor(Math.random() * specials.length)];
}

function generatePassword() {
    if (lenEl.value < 8){
        alert("Password Length must be between 8 and 128 characters");
        lenEl.value = 8;
    }

    if (lenEl.value > 128){
        alert("Password Length must be between 8 and 128 characters");
        lenEl.value = 128;
    }

    const len = lenEl.value;

    let password = "";

    if (upperEl.checked) {
        password += getUppercase();
    }

    if (lowerEl.checked) {
        password += getLowercase();
    }

    if (numberEl.checked) {
        password += getNumber();
    }

    if (specialEl.checked) {
        password += getspecial();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;

}

function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getUppercase());
    }

    if (lowerEl.checked) {
        xs.push(getLowercase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (specialEl.checked) {
        xs.push(getspecial());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateBtn.addEventListener("click", generatePassword);
