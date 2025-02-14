const d = document
const carrito = []
function producto(id, nombre, precio, presentacion) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.presentacion = presentacion;
}

const productos = [
  new producto(1, "Azúcar", 1200, "1kg"),
  new producto(2, "Coca-Cola", 2000, "2L"),
  new producto(3, "Papas fritas", 3200, "480gr"),
  new producto(4, "Tomate", 1000, "1kg"),
  new producto(5, "Lechuga", 800, "1u"),
  new producto(6, "Papa", 2000, "1kg"),
  new producto(7, "Zapallo", 1450, "1kg"),
  new producto(8, "Zanahoria", 900, "1kg"),
];

function createCard() {
  const lista = d.getElementById("lista");
  productos.forEach((producto) => {
    const card = d.createElement("div");
    card.id = "card";
    card.innerHTML = `<h2>${producto.nombre}</h2>`;
    lista.appendChild(card);
    const precio = d.createElement("p");
    precio.innerHTML = `Precio: ${producto.precio}`;
    card.appendChild(precio);
    const presentacion = d.createElement("p");
    presentacion.innerHTML = `Presentacion: ${producto.presentacion}`;
    card.appendChild(presentacion);
    const button = d.createElement("button");
    button.textContent = "Agregar al carrito";
    button.addEventListener("click", () => agregarCarrito(producto));
    card.appendChild(button);
    return card;
  });
}

function agregarCarrito(producto) {
  carrito.push(producto)
  actualizarCarrito()
  guardarCarrito()
}


function eliminarProducto(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
  guardarCarrito();
}


function vaciarCarrito() {
  carrito.length = 0;
  actualizarCarrito();
  guardarCarrito();
}


function actualizarCarrito() {
  const carritoLista = d.getElementById("carrito")
  carritoLista.innerHTML = ""
  let total = 0
  carrito.forEach((producto, index) => {
    total += producto.precio
    const card = d.createElement("div")
    card.className = "card"
    carritoLista.appendChild(card)
    card.innerHTML = `<h2>${producto.nombre}</h2>`
    const precio = d.createElement("p");
    precio.innerHTML = `Precio: ${producto.precio}`
    card.appendChild(precio);
    const presentacion = d.createElement("p")
    presentacion.innerHTML = `Presentacion: ${producto.presentacion}`
    card.appendChild(presentacion)
    const removeBtn = d.createElement("button")
    removeBtn.textContent = "Eliminar"
    removeBtn.className = "remove-btn"
    removeBtn.addEventListener("click", () => eliminarProducto(index))
    card.appendChild(removeBtn)
    
    return card
  })
  
  const totalDiv = d.createElement("div")
  totalDiv.className = "total-price"
  totalDiv.innerHTML = `<h3>Total: $${total}</h3>`
  carritoLista.appendChild(totalDiv)
  
  const clearBtn = d.createElement("button")
  clearBtn.textContent = "Vaciar Carrito"
  clearBtn.className = "clear-btn"
  clearBtn.addEventListener("click", vaciarCarrito)
  carritoLista.appendChild(clearBtn)
}

// Load saved cart when page loads
cargarCarrito();

// Save cart before page unload
window.addEventListener('beforeunload', () => {
  guardarCarrito()
})

createCard()

function emergert() {
  const toggle = d.getElementById("toggle")
  const btn = d.getElementById("openw")
  const close = d.getElementsByClassName("close")
  btn.addEventListener("click", () => {
    toggle.style.display = "block"
  });
  close[0].addEventListener("click", () => {
    toggle.style.display = "none"
  })
  window.addEventListener("click", (e) => {
    if (e.target === toggle) {
      toggle.style.display = "none"
    }
  })
}

emergert()












function guardarCarrito() {
  try {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  } catch (error) {
    console.error("Error saving cart:", error)
  }
}

function cargarCarrito() {
  try {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito"))
    if (carritoGuardado && carritoGuardado.length > 0) {
      carrito.length = 0
      carrito.push(...carritoGuardado)
      actualizarCarrito()
    }
  } catch (error) {
    console.error("Error loading cart:", error)
    localStorage.removeItem("carrito")
  }
}
