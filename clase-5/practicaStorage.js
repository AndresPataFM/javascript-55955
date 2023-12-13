// Primitivos
const numero = 123

const booleano = false

const string = "hola"

// Complejos
const array = []

const objeto = {}

// Storage

localStorage.setItem("guardoNumero", numero)
localStorage.setItem("guardoBooleano", booleano)
localStorage.setItem("guardoString", string)
localStorage.setItem("guardoArray", array)
localStorage.setItem("guardoObjeto", objeto)

// Obtener datos

// const recuperarNumero = localStorage.getItem("guardoNumero")
// console.log(recuperarNumero)
// console.log(typeof recuperarNumero)

// const recuperarAlgo = localStorage.getItem("guardoAlgo")
// console.log(recuperarAlgo)
// console.log(typeof recuperarAlgo)

// console.log(localStorage)

const gato = {
    nombre: "Michufus",
    pelaje: "Negro",
    edadAnios: 3,
    maullar: function(){
        alert("miau")
    },
    mostrarDatos: function(){
        return `Nombre: ${this.nombre}, pelaje: ${this.pelaje} y edad: ${this.edadAnios}`
    }
}

const gatitoJSON = JSON.stringify(gato)

console.log("gato normal", gato)
console.log("gato JSON", gatitoJSON)

console.log("guardo gato")
sessionStorage.setItem("gato", gatitoJSON)
// Pueden volver a pasar el objeto luego por una clase apra volverle a dar los métodos

const conseguirGatito = sessionStorage.getItem("gato")
console.log("conseguirGatito", conseguirGatito)

const gatoJs = JSON.parse(conseguirGatito)
console.log("gatitoJs", gatoJs)

