let contenedorProductos = document.getElementById("contenedorProductos");
let textoTotal = document.getElementById("textoTotal");
let total = 0
let btnComprar = document.getElementById("btn-comprar")
let btnPedir = document.getElementById("btn-nav")

const elaboraciones = [
    {nombre:"Pan Lactal", precio: 2000, stock: 12, imagen: "../imagenes/lactal.jpg"},
    {nombre:"Pan Pebete", precio: 200, stock: 60, imagen: "../imagenes/pebete.webp" },
    {nombre:"Pan Hamburguesa", precio: 200, stock: 72, imagen: "../imagenes/hamburguesa.webp" },
    {nombre:"Postre Quemadito", precio: 10000, stock: 5, imagen: "../imagenes/quemadito.jpg"},
    {nombre:"Postre Rogel", precio: 11000, stock: 3, imagen: "../imagenes/rogel.jpg"},
    {nombre:"Postre Chaja", precio: 9500, stock: 5, imagen: "../imagenes/chaja.jpg"},
    {nombre:"Facturas", precio: 450, stock: 96, imagen: "../imagenes/facturas.jpeg"},
    {nombre:"Churros", precio: 300, stock: 96, imagen: "../imagenes/churros.jpg"},
    {nombre:"Donas", precio: 350, stock: 60, imagen: "../imagenes/donas.jpg"},
    {nombre:"Bolas de fraile", precio: 350, stock: 60, imagen: "../imagenes/bolas.png"},
    {nombre:"Bizcochitos x250gr", precio: 1000, stock: 16, imagen: "../imagenes/bizcochitos.webp"},
    {nombre:"Pan dulce 500gr", precio: 4000, stock: 16, imagen: "https://cuk-it.com/wp-content/uploads/2023/12/pan-dulce-clasico.webp"},
]

function listaProductos (arrayProductos) {
    for (let i = 0; i < arrayProductos.length; i++) {
        contenedorProductos.innerHTML += `
        <div class="caja-productos">
         <img src="${arrayProductos[i].imagen}">
         <h5> ${arrayProductos[i].nombre} <br>  Precio: $${arrayProductos[i].precio} C/U</h5>
         <input class="stock-carrito" id="stock${i}" type="Number" value="${arrayProductos[i].stock}" readonly> 
         <input class="cantidad-carrito" id="cantidad${i}" type="Number" placeholder="Ingrese la cantidad">
         <button id="btn${i}"> Agrega al carrito</button>
      </div>
        `
    }

    for (let i = 0; i < arrayProductos.length; i++) {
        document.getElementById(`btn${i}`).addEventListener("click" , () => {
            comprar(i, elaboraciones) 
        })
    }

    function comprar (index, arrayProductos) {
        let stockActual = document.getElementById(`stock${index}`)
        let cantidadUsuario = document.getElementById(`cantidad${index}`)
        let stock = parseInt(stockActual.value)
        let cantidad = parseInt(cantidadUsuario.value)
        let precio = arrayProductos[index].precio

        if (cantidad > 0 && cantidad <= stock) {
            total += cantidad * precio
            textoTotal.innerHTML = `Total: ${total}`
            stockActual.value = stock - cantidad 
        }
        else {
            ("No se pudo realizar la compra. Verifique estar ingresando una cantidad de stock disponible")
        }
        
    }
}

listaProductos(elaboraciones)

let comprarAhora = () => {
    alert(`Compra realizada con exito. Pagaste: $${total}`)
    
}
btnComprar.addEventListener("click", comprarAhora)

let pedir = () => {
    alert("Para hacer un pedido especial, comunicate al siguiente numero: 2983-654419")
}

btnPedir.addEventListener("click",pedir)
