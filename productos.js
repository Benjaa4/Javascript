const d = document
const carrito = []
function producto(id, nombre, precio, porcion) {
  this.id = id
  this.nombre = nombre
  this.precio = precio
  this.porcion = porcion

}

const productos = [new producto (1, "azúcar", 1200 , "1kg") , 
new producto(2, "Coca-Cola", 2000, "2L"), 
new producto (3, "Papas fritas", 3200, "480gr"),
new producto (4, "Tomate", 1000, "1kg" ),
new producto (5, "Lechuga", 800, "1u" ),
new producto (6, "Papa", 2000, "1kg" ),
new producto (7, "Zapallo", 1450, "1kg" ),
new producto (8, "Zanahoria", 900, "1kg" ),]


function mostrarProductos () {
  const lista = d.getElementById("lista")
  
  productos.forEach(producto => {
    const div = d.createElement("div")
    div.classList.add("producto")
    const li = d.createElement("li")
    div.appendChild(li)
    li.innerHTML = `${producto.nombre} - ${producto.precio} - ${producto.porcion}`
    lista.appendChild(div)
    const img = d.createElement("img")
    img.src = `img/${producto.nombre}.jpg`
    li.appendChild(img)
    const boton = d.createElement("button")
    boton.innerHTML = "Agregar"
    boton.classList.add("btn")
    div.appendChild(boton)
  
    boton.addEventListener("click", () => {
      agregarCarrito(producto)
    })
     
  })
  
}

      function agregarCarrito (producto) {
        carrito.push(producto)
      actualizarCarrito()
}

function actualizarCarrito() {
  const carritoLista = d.getElementById("carrito")
  carritoLista.innerHTML = ""
  carrito.forEach(producto => {
    const li = d.createElement("li")
    li.innerHTML = `${producto.nombre} - ${producto.precio} - ${producto.porcion}`
    carritoLista.appendChild(li)
    borrar_carrito()
  })
}

 function borrar_carrito() {const borrar = d.createElement('button')
  borrar.innerHTML = "borrar"
  const carritoLista = d.getElementById("carrito")
  carritoLista.appendchild(borrar)}

      mostrarProductos()















