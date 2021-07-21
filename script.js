const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);

let button = query(".button");
let email = query(".email");
let password = query(".password");

function verify() {
  if (email.value === "tryber@teste.com" && password.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
}

button.addEventListener("click", verify);
