async function sha256Hex(message) {
  const bytes = new TextEncoder().encode(message);          // UTF-8 bytes
  const hash = await crypto.subtle.digest("SHA-256", bytes); // ArrayBuffer, 32 bytes
  return Array.from(new Uint8Array(hash), b => b.toString(16).padStart(2, "0")).join("");
}


const input_login = document.getElementById("login");
const input_password = document.getElementById("password");
const SignIn_button = document.getElementById("signin");
const SignUp_button = document.getElementById("signup");
const ProblemP = document.getElementById("problem");

SignIn_button.addEventListener('click', function() {
  console.log("LOGIN");
  
  login = input_login.value;
  password = input_password.value;
  console.log("Получены вводы");

  login_hash = sha256Hex(login);
  password_hash = sha256Hex(password);
  console.log("Вводы переведены в хэш");

  let database;
  console.log("\nПолучение датабазы");
  fetch("database.json").then((response) => response.json())
  console.log(response);
});

//SignUp_button.addEventListener('click', sign_up(input_login.value, input_password.value));