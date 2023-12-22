let passwordLength = 8;

let isUpperCase = false;
let isNumber = false;
let isSymbols = false;

const passwordRangeInputEl = document.getElementById("passrangeInput");
const passrangeValueEl = document.getElementById("passrangeValue");
const genBtn = document.getElementById("genBtn");
const passwordEl = document.getElementById("password"); // Added this line to cache the password element

const generatePassword = (passLength) => {
  // Corrected the function name to generatePassword
  const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetter = isUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  const numbers = isNumber ? "0123456789" : "";
  const symbols = isSymbols ? "!@#$%^&*()_+" : "";
  const passwordChar = lowerCaseLetter + upperCaseLetter + numbers + symbols;
  let password = "";
  for (let i = 0; i < passLength; i++) {
    // Changed the condition to i < passLength
    const charIndex = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar[charIndex];
  }
  return password;
};

passwordRangeInputEl.addEventListener("input", (e) => {
  passwordLength = parseInt(e.target.value);
  passrangeValueEl.innerText = passwordLength;
});

genBtn.addEventListener("click", () => {
  const upperCaseCheckEl = document.getElementById("uppercase");
  const numbersCheckEl = document.getElementById("numbers");
  const symbolsCheckEl = document.getElementById("symbols");

  isUpperCase = upperCaseCheckEl.checked; // Corrected the property name to 'checked'
  isNumber = numbersCheckEl.checked; // Corrected the property name to 'checked'
  isSymbols = symbolsCheckEl.checked; // Corrected the property name to 'checked'
  const password = generatePassword(passwordLength);
  passwordEl.innerHTML = password;
  console.log("password", password);
});

passwordEl.addEventListener("click", () => {
  // Changed the parameter name to avoid confusion
  if (passwordEl.innerText.length > 0) {
    navigator.clipboard
      .writeText(passwordEl.innerText)
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch((err) => {
        alert("Could not copy"); // Corrected the alert message
      });
  }
});
