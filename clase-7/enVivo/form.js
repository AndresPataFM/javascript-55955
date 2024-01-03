const formulario = document.getElementById("form")
console.log(formulario)

// formulario.addEventListener("submit", (evento)=>{
//     evento.preventDefault()
//     console.log(evento)
//     console.log(evento.target[0].value)
//     console.log(evento.target[1].value)
//     console.log(evento.target[2].value)
// })

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    const datos = new FormData(evento.target)
    const cliente = Object.fromEntries(datos)
    console.log(cliente)
})

const nombre = document.getElementById("nombre")


