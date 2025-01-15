const d = document


function producto(id, nombre, precio, porcion) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.porcion = porcion

}
let producto1 = new producto (1, "azucar", 1200 , "1kg")

const productos = [producto1, 
new producto(2, "Coca-Cola", 2000, "2L")
, new producto (3, "Papas fritas", 3200, "480gr"),
new producto (4, "Tomate", 1000, "1kg" )





]

console.log(productos)

function mostrarProductos() {
   productos.forEach (productos => {
    let lista = d.getElementById("lista")
    let item = d.createElement("li")
    item.innerHTML = `ID: ${productos.id}, Nombre: ${productos.nombre}, Precio: ${productos.precio}, Porcion: ${productos.porcion}`
    lista.appendChild(item)
} )
    }
console.log(mostrarProductos())



