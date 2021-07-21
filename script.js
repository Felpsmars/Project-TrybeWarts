const query = document.querySelector.bind(document);
// const queryAll = document.querySelectorAll.bind(document);

const button = query(".button");
const email = query(".email");
const password = query(".password");

function verify() {
  if (email.value === "tryber@teste.com" && password.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
}

button.addEventListener("click", verify);

let checkBox = query("#checkbox");
let submit = query("#submit-btn");

function checkChange() {
  if (checkBox.value === "") {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
}

checkBox.addEventListener("click", checkChange);
