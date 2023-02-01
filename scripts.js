const form = document.querySelector("form");
const email = document.querySelector('input[name="email"]');
const country = document.querySelector('input[name="country"]');
const zipcode = document.querySelector('input[name="zipcode"]');
const password = document.querySelector('input[name="password"]');
const confirmPswd = document.querySelector('input[name="confirm"]');

const emailError = email.nextElementSibling;
const countryError = country.nextElementSibling;
const zipcodeError = zipcode.nextElementSibling;
const passwordError = password.nextElementSibling;
const confirmError = confirmPswd.nextElementSibling;


email.addEventListener("focusout", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
  } else showEmailErrors();
});

country.addEventListener("input", (event) => {
  if (country.validity.valid) {
    countryError.textContent = "";
  } else showCountryErrors();
});

zipcode.addEventListener("input", (event) => {
  if (zipcode.validity.valid) {
    zipcodeError.textContent = "";
  } else showZipcodeErrors();
});

password.addEventListener("input", (event) => {
    if (password.validity.valid) {
        passwordError.textContent = "";
      } else showPasswordErrors();
})

confirmPswd.addEventListener("input", () => {
    console.log(password.value)
    console.log(confirmPswd.value)
    if (confirmPswd.validity.valid)
    confirmError.textContent = "";
    else showConfirmErrors();
})

form.addEventListener("submit", (ev) => {
    if(!form.checkValidity()) {ev.preventDefault(); showErrors();}
});


function showEmailErrors(){
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address.";
      } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address.";
      } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
      }
}

function showCountryErrors(){
    if (country.validity.valueMissing) {
        countryError.textContent = "You need to enter your country.";
      } else if (country.validity.tooShort) {
        countryError.textContent = `Country should be at least ${country.minLength} characters; you entered ${country.value.length}.`;
      }
}

function showZipcodeErrors(){
    if (zipcode.validity.valueMissing) {
        zipcodeError.textContent = "You need to enter a postal code.";
      }
}

function showPasswordErrors(){
    if (password.validity.valueMissing) {
        passwordError.textContent = "You need to enter a password.";
      }
      else if(password.validity.patternMismatch){
        passwordError.textContent = "Minimum eight characters, at least one letter and one number.";
      }
}

function showConfirmErrors(){
    if (confirmPswd.validity.valueMissing) {
        confirmError.textContent = "You need to confirm your password.";
      }
      else if(confirmPswd.value != password.value){
        confirmPswd.setCustomValidity("Passwords do not match.");
        confirmError.textContent = "Passwords do not match.";
      }
      else {confirmPswd.setCustomValidity("");  confirmError.textContent ="";}
}

function showErrors(){
    showCountryErrors();
    showEmailErrors();
    showZipcodeErrors();
    showPasswordErrors();
    showConfirmErrors();
}
