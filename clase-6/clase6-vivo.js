function nombre(parametro){
  return dato
}

// el parámetro o el dato son una función +> Función de orden superior

// return

// generear funciones, como función constructora de funciones
function dX(caras){
  const funcionCreada = function(){
    return Math.floor(Math.random()*caras+1)
  }
  return funcionCreada
}

const d20 = dX(20)
const d6 = dX(6)
// console.log(d20())

// ===============
// parametro

const numeros = [1, 43, 6, 124, 6, 2]

function recorrerNumerosYAplicarFuncion(funcionNueva){
  for(let i=0; i<numeros.length; i++){
    funcionNueva(numeros[i])
  }
}

// recorrerNumerosYAplicarFuncion(console.log)

// numeros.forEach((elemento, indice)=>{
//   console.log(`el elemento es:`, elemento, indice)
// })

// numeros.forEach((elemento, indice)=>{
//   numeros[indice] +=5
//   console.log(`el elemento es:`, elemento)
// })

const participantesCurso = [
  {nombre: "Andrés", puesto:"docente"},
  {nombre: "Diana", puesto:"docente"},
  {nombre: "Hector", puesto:"estudiante"},
  {nombre: "Gaston", puesto:"estudiante"},
]

// Muy útil al buscar un producto por id
// console.log(participantesCurso.find((elemento)=>{
//   const pregunta = elemento.nombre === "Hector"
//   return pregunta //esto es un booleano
// }))

// solo retorna el primero que encuentra
// console.log(participantesCurso.find((elemento)=>{
//   const pregunta = elemento.puesto === "docente"
//   return pregunta
// }))

// Filter retorna un array
// console.log(participantesCurso.filter((elemento)=>{
//   const pregunta = elemento.puesto === "docente"
//   return pregunta
// }))

// console.log(participantesCurso.some((elemento)=>{
//   const pregunta = elemento.puesto === "gerente"
//   return pregunta
// }))

const productos = [
  {nombre: "🍔", stock: 0, precio: 10},
  {nombre: "🥪", stock: 30, precio: 15},
  {nombre: "🥨", stock: 8, precio: 20},
  {nombre: "🌭", stock: 8, precio: 3},
  {nombre: "🥯", stock: 8, precio: 57},
  {nombre: "🥟", stock: 8, precio: 8},
]
// productos.forEach(elemento=>console.log(elemento))

// console.log("Si da true hay algo que necesita quitarse o agregar productos nuevos",productos.some((elemento)=>{
//   return elemento.stock === 0
// }))
const inflacion = 1.5
// console.log(productos.map((elemento)=>{
//   const nuevoElemento = {
//     nombre: elemento.nombre, 
//     stock: elemento.stock, 
//     precio: elemento.precio*inflacion,
//     necesitaNuevoStock: elemento.stock===0
//   }
//   return nuevoElemento
// }))

// así no, los datos siguen conectados
// console.log(productos.map((elemento)=>{
//   const nuevoElemento = elemento
//   nuevoElemento.precio *= inflacion
//   return nuevoElemento
// }))

// console.log(
//   productos.reduce(
//     (acumulador, elemento)=>{
//       return acumulador += elemento.stock
//     }, 0 // valor inicial del acumulador
//   )
// )

// console.log(
//   productos.reduce(
//     (acumulador, elemento)=>{
//       return acumulador += `${elemento.nombre}; `
//     }, "Productos:" // valor inicial del acumulador
//   )
// )

const carrito = [
  {nombre: "🥪", cantidad: 7, precio: 15},
  {nombre: "🥨", cantidad: 4, precio: 20},
]

// console.log("precio total: $",
//   carrito.reduce(
//     (acumulador, elemento)=>{
//       return acumulador += elemento.cantidad * elemento.precio
//     }, 0 // valor inicial del acumulador
//   )
// )

console.log(productos)
productos.sort((elemento1, elemento2)=>{
  return elemento1.precio - elemento2.precio
})
console.log(productos)

// ================

// Asi no
/* const array = []

function agregarDatos(datoAAgregar){
  array.push(datoAAgregar)
  mostrarDatos()
}

function mostrarDatos(){
  array.forEach(x=>console.log(x))
} */
// Así
// const array = []

// function mostrarDatos(){
//   array.forEach(x=>console.log(x))
// }

// function agregarDatos(datoAAgregar){
//   array.push(datoAAgregar)
//   mostrarDatos()
// }

// ===
// const array = []


// const agregarDatos = (datoAAgregar)=>{
//   array.push(datoAAgregar)
//   mostrarDatos()
// }

// const mostrarDatos=()=>{
//   array.forEach(x=>console.log(x))
// }
// agregarDatos(5)