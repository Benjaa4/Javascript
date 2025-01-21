const d = document


function producto(id, nombre, precio, porcion) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.porcion = porcion

}

const productos = [new producto (1, "azúcar", 1200 , "1kg") , 
new producto(2, "Coca-Cola", 2000, "2L")
, new producto (3, "Papas fritas", 3200, "480gr"),
new producto (4, "Tomate", 1000, "1kg" ),
new producto (5, "Lechuga", 800, "1u" ),
new producto (6, "Papa", 2000, "1kg" ),
new producto (7, "Tomate", 1000, "1kg" ),
new producto (8, "Zanahoria", 900, "1kg" ),]

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




