async function sha256Hex(message) {
  const bytes = new TextEncoder().encode(message);          // UTF-8 bytes
  const hash = await crypto.subtle.digest("SHA-256", bytes); // ArrayBuffer, 32 bytes
  return Array.from(new Uint8Array(hash), b => b.toString(16).padStart(2, "0")).join("");
}


async function sign_in(hash_login, hash_password) {

}


async function sign_up(hash_login, hash_password) {
  console.log("Sign Up");
  console.log(hash_login);
  console.log(hash_password);
}

const input_login = document.getElementById("login");
const input_password = document.getElementById("password");
const SignIn_button = document.getElementById("signin");
const SignUp_button = document.getElementById("signup");

SignIn_button.addEventListener('click', sign_in(sha256Hex(input_login.value), sha256Hex(input_password.value)))
SignUp_button.addEventListener('click', sign_up(sha256Hex(input_login.value), sha256Hex(input_password.value)))