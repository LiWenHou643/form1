const form = document.getElementById("form1");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const container = document.querySelector(".container");
const anmtBox = document.querySelector(".box-animation");

function nameCheck(name) {
  if (name.value === "") errorMessage(name, "This field is required");
  else successMessage(name);
}
function validateEmail(email) {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return mailFormat.test(String(email.value).toLowerCase());
}
function emailCheck(email) {
  if (email.value === "") errorMessage(email, "This field is required");
  else if (!validateEmail(email)) errorMessage(email, "This email is invalid");
  else successMessage(email);
}

function errorMessage(element, message) {
  var formRow = element.parentElement.parentElement;
  formRow.classList.remove("success");
  formRow.classList.add("error");

  formRow.querySelector(".message").textContent = message
}
function successMessage(element, message) {
    var formRow = element.parentElement.parentElement;
    formRow.classList.remove("error");
    formRow.classList.add("success");
  
    formRow.querySelector(".message").textContent = message
  }


firstname.onblur = () => nameCheck(firstname);
lastname.onblur = () => nameCheck(lastname);
email.onblur = () => emailCheck(email);

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const formRows = document.querySelectorAll(".form-row");
  let isValid = true
  formRows.forEach((row) => {
    if (row.classList.contains("error")) isValid=false
  })

  if (isValid) {
    container.classList.add("complete")
    alert("You have successfully submitted.")
    anmtBox.classList.add("show");
  } else {
    container.classList.remove("complete")
    anmtBox.classList.remove("show");
  }
});
