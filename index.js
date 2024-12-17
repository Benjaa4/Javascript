function login() {

    let nombre = prompt("cual es tu nombre")
    let edad
    do {
        edad = prompt("cual es tu edad")
        if (isNaN(edad)) { alert("ingrese una edad valida") }
    }
    while (isNaN(edad))

    let pais = prompt("Cual es tu nacionalidad")
    let ciudad = prompt("Cual es tu ciudad de residencia actual?")
    const login_data = [nombre, parseInt(edad), pais, ciudad]
    let confirmacion = confirm("esta informacion es correcta?" + "nombre =" + login_data[0] + " " + "edad =" + " " + login_data[1] + " " + "pais =" + login_data[2] + " " + "ciudad=" + login_data[3])


    if (confirmacion === true) { alert("bienvenido " + nombre + ", " + pais + ", " + ciudad) }
    else { login() }
}

login()














