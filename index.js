  const d = document
  const formulario = d.getElementById('form')
  function mostrarInfo () {
  formulario.addEventListener('submit', function(event) {event.preventDefault()} )
  const nombre = d.getElementById('nombre').value
  const email = d.getElementById('email').value
  const contraseña = d.getElementById('password').value
  const confirmarContraseña = d.getElementById('cfmpassword').value
  if (contraseña != confirmarContraseña) {alert("las contraseñas no coinciden")}
  else {
  alert(nombre +" \n" + email + "\n " + contraseña + " \n ")
  }}
