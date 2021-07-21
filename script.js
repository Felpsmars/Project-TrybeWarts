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
