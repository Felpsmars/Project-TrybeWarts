const query = document.querySelector.bind(document);

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

const checkBox = query("#checkbox");
const submit = query("#submit-btn");

function checkChange() {
  if (checkBox.value === "") {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
}

checkBox.addEventListener("click", checkChange);

const text = query("#textarea");
const character = query("#counter");

function charCounter() {
  const val = text.value;
  character.innerHTML = 500 - val.length;
}

text.addEventListener("keyup", charCounter);

function defaultpreventer(event) {
  event.preventDefault();
}

submit.addEventListener("click", defaultpreventer);
