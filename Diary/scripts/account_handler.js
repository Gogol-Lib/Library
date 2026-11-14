async function sha256Hex(message) {
  const bytes = new TextEncoder().encode(message);          // UTF-8 bytes
  const hash = await crypto.subtle.digest("SHA-256", bytes); // ArrayBuffer, 32 bytes
  return Array.from(new Uint8Array(hash), b => b.toString(16).padStart(2, "0")).join("");
}


function sign_in(login, password) {

}


function sign_up(login, password) {
  console.log("Sign Up");
}

const input_login = document.getElementById("login");
const input_password = document.getElementById("password");
const SignIn_button = document.getElementById("signin");
const SignUp_button = document.getElementById("signup");
const ProblemP = document.getElementById("problem");

SignIn_button.addEventListener('click', function() {
  login = input_login.value;
  password = input_password.value;

  login_hash = sha256Hex(login);
  password_hash =sha256Hex(password);

  let database;
  fetch("database.json").then((response) => response.json()).then((json) => database);
  console.log(database);


});

//SignUp_button.addEventListener('click', sign_up(input_login.value, input_password.value));