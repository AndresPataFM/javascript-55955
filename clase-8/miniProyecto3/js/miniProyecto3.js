class Producto{
    constructor(name, id, type, price, stock, description){
        this.name = name;
        this.id = id;
        this.type = type;
        this.price = price;
        this.stock = stock;
        this.description = description;
    }
}

// OR lógico para cargar local storage
const productos = JSON.parse(localStorage.getItem("productos")) || [] 
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
const pedidos = JSON.parse(localStorage.getItem("pedidos")) || []

const agregarProducto = ({name, id, type, price, stock, description})=>{
    //Destuctura un objeto para recibir los datos
    if(productos.some(prod=>prod.id===id)){
        console.warn("Ya existe un producto con ese id") // esto lo podemos hacer a futuro con lirberias
    } else {
        const productoNuevo = new Producto(name, id, type, price, stock, description)
        productos.push(productoNuevo)
        //guarda el nuevo array de productos
        localStorage.setItem('productos', JSON.stringify(productos))
    }
}


const totalCarrito = ()=>{
    let total = carrito.reduce((acumulador, {price, quantity})=>{
        return acumulador + (price*quantity)
    }, 0)
    return total
}
const totalCarritoRender = ()=>{
    // se encarga de calcular el total del carrito
    const carritoTotal = document.getElementById("carritoTotal")
    carritoTotal.innerHTML=`Precio total: $ ${totalCarrito()}`
}

const agregarCarrito = (objetoCarrito)=>{
    // agrega productos al carrito
    carrito.push(objetoCarrito)
    totalCarritoRender()
}



const renderizarCarrito = ()=>{
    // borra el cotnenido de carrito y renderiza carrito en una lista
    const listaCarrito = document.getElementById("listaCarrito")
    // borramos para evitar clones viejos
    listaCarrito.innerHTML=""
    carrito.forEach(({name, price, quantity, id}) =>{
        let elementoLista = document.createElement("li")
        elementoLista.innerHTML=`Producto:${name} -- P/u: ${price} -- Cant.:${quantity} <button id="eliminarCarrito${id}">X</button>`
        listaCarrito.appendChild(elementoLista)
        const botonBorrar = document.getElementById(`eliminarCarrito${id}`)
        botonBorrar.addEventListener("click",()=>{
            // creo un array sin el elemento a borrar y lo igualo a carrito
            carrito = carrito.filter((elemento)=>{
                if(elemento.id !== id){
                    return elemento
                }
            })
            let carritoString = JSON.stringify(carrito)
            localStorage.setItem("carrito", carritoString)
            renderizarCarrito()
        })
        let carritoString = JSON.stringify(carrito)
        localStorage.setItem("carrito", carritoString)
    })
}

const borrarCarrito = ()=>{
    carrito.length = 0  //es una manera de borrar el contenido de un array constante
    let carritoString = JSON.stringify(carrito)
    localStorage.setItem("carrito", carritoString)
    renderizarCarrito()
}

const renderizarProductos = (arrayUtilizado)=>{
    // renderiza productos en el DOM
    const contenedorProductos = document.getElementById("contenedorProductos")
    // borramos para no duplicar
    contenedorProductos.innerHTML = ""
    arrayUtilizado.forEach(({name, id, type, price, stock, description})=>{
        const prodCard = document.createElement("div")
        prodCard.classList.add("col-xs")
        prodCard.classList.add("card")
        prodCard.style = "width: 270px;height: 550px; margin:3px"
        prodCard.id = id
        prodCard.innerHTML = `
                <img src="./assets/${name+id}.png" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6>${type}</h6>
                    <p class="card-text">${description}</p>
                    <span>Stock: ${stock}</span>
                    <span>$ ${price}</span>
                    <form id="form${id}">
                        <label for="contador${id}">Cantidad</label>
                        <input type="number" placeholder="0" id="contador${id}">
                        <button class="btn btn-primary" id="botonProd${id}">Agregar</button>
                    </form>
                </div>`
        contenedorProductos.appendChild(prodCard)
        const btn = document.getElementById(`botonProd${id}`)
        // Funcionalidad al boton de agregar para agregar prods al carrito
        btn.addEventListener("click",(e)=>{
            e.preventDefault()
            const contadorQuantity = Number(document.getElementById(`contador${id}`).value)
            if(contadorQuantity>0){
                agregarCarrito({name, id, type, price, stock, description, quantity:contadorQuantity})
                renderizarCarrito()
                const form = document.getElementById(`form${id}`)
                form.reset()
            }
        }) 
    })
}

const productosPreexistentes = async ()=>{
    // Si el array de productos esta vacio, hace un fetch de los productos
    if (productos.length===0){
        try{
            // console.log("PROMESA")
            // es buena pracitca poner aparte el link con el que trabajas, hay mejor manejo.
            const URLprodRelativoRaiz = "/clase-8/miniProyecto3/products.json" // Mejor si hay varios HTML en distintos lados aunque si no hay compilación, puede hacer lío al hostear
            const URLprodRelativoPosicion = "./products.json" // Marea porque es en relacion al HTML!!!
            const productosBasePuro = await fetch(URLprodRelativoRaiz)
            const productosBase = await productosBasePuro.json()
            productosBase.forEach(prod=>{
                    agregarProducto(prod)}
                )
        } catch(err) {
            console.error("Se produjo un error al realizar el fetch:", err)
        }finally{
            renderizarProductos(productos)
        }
    } else {
        renderizarProductos(productos)
    }
}



const finalizarCompra = (event)=>{
    // como conseguir todos los datos de un form
    // conseguimos la data de la form
    const data = new FormData(event.target)
    // creamos un objeto que sea {nombreInput: valorInput,...}
    const cliente = Object.fromEntries(data)
    // Creamos un "ticket"
    const ticket = {cliente: cliente, total:totalCarrito(),id:pedidos.length, productos:carrito} //idealmente le ponen id único mejor que este
    pedidos.push(ticket)
    // Guardamos el ticket en nuestra "base de datos"
    localStorage.setItem("pedidos", JSON.stringify(pedidos))
    // Borra el array y le da un mensaje al usuario
    borrarCarrito()
    let mensaje = document.getElementById("carritoTotal")
    mensaje.innerHTML = "Muchas gracias por su compra, los esperamos pronto"

}

// DOM
const compraFinal = document.getElementById("formCompraFinal")
compraFinal.addEventListener("submit",(event)=>{
    // evitamos el reset
    event.preventDefault()
    if(carrito.length>0){
        finalizarCompra(event)
    } else {
        // console.warn("canasta vacia") // no para esta entrega, lo ahcemos a futuro con lirberias
    }
})
const selectorTipo = document.getElementById("tipoProducto")
selectorTipo.onchange = (evt)=>{
    const tipoSeleccionado =  evt.target.value
    if(tipoSeleccionado === "0"){
        renderizarProductos(productos)
    } else {
        renderizarProductos(productos.filter(prod=>prod.type === tipoSeleccionado))
    }
}


// Testing
const app = ()=>{
    productosPreexistentes() //aca hice asincronismo
    // renderizarProductos(productos) // se movio a productos pre-existentes
    renderizarCarrito()
    totalCarritoRender()
}

//ejecuto mi aplicacion
app()