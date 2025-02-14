const d = document;
const signup = d.getElementById("signup");
const signin = d.getElementById("login");

function registro() {
  signup.addEventListener("click", function (event) {
    event.preventDefault();
  });
  const name = d.getElementById("username").value;
  const email = d.getElementById("email").value;
  const password = d.getElementById("password").value;
  const cfmpassword = d.getElementById("cfmpassword").value;
  if (password !== cfmpassword) {
    alert("las contraseñas no coinciden");
  } else if (
    name === "" ||
    email === "" ||
    password === "" ||
    cfmpassword === ""
  ) {
    alert("Por favor, llene todos los campos");
  } else {
    alert(name + " \n" + email + "\n " + password + " \n ");
  }
  localStorage.setItem("name", name);
  localStorage.setItem("password", password);
  localStorage.setItem("email", email);
}

signup.addEventListener("submit", registro);

function login() {
  signin.addEventListener("click", function (event) {
    event.preventDefault();
  });
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  if (
    email === d.getElementById("lgemail").value &&
    password === d.getElementById("lgpassword").value
  ) {
    alert("Bienvenido" + " " + localStorage.getItem("name"));
  } else {
    alert("Credenciales incorrectas");
  }
}

signin.addEventListener("submit", login);

function log_out() {
  alert("Hasta luego" + " " + localStorage.getItem("name"));
  localStorage.clear();
}
d.getElementById("logout").addEventListener("click", log_out);
