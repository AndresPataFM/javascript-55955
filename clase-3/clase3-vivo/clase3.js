//  Función más básica

// function saludar(){
//   alert("Hola")
// }

// saludar()

// Parametros

// function calcularFactorial(numero){
//   let factorial = 1
//   if(numero === 0){
//     return 0
//   }
//   for(let i=1; i<=numero;i++){
//     factorial = factorial*i
//   }
//   alert(`El factorial de ${numero} es ${factorial}`)
// }

// calcularFactorial(5)

// function ingresarDatos(nombre, anios, genero){
//   alert(`Se agrego a la base de datos a ${nombre}, tiene ${anios} años y es de género ${genero}`)
// }

// ingresarDatos("Andrés", 30, "Másculino")

// return

// function despedida(){
//   let despedirse = "Chau nos vemos la próxima semana"
//   return despedirse
// }
// console.log(despedida())

/* 
5 + 2 es igual a 7

5 + 2 = a 7 
*/

function sumar (primerNumero, segundoNumero){
  return primerNumero + segundoNumero
}
// funcion anónima con const me protege el código
const sumarAnonima = function (primerNumero, segundoNumero){
  return primerNumero + segundoNumero
}

// funcion flecha
const sumarFlecha = (primerNumero, segundoNumero) => {
  return primerNumero + segundoNumero
}

const saludo = (nombre)=>{
  alert(`Hola ${nombre}`)
}

// console.log(sumarFlecha(5, 24))

// return implicito
const sumarFlechaVago = (primerNumero, segundoNumero) => primerNumero + segundoNumero

// console.log(sumarFlechaVago(4,7))

// 1 solo parámetro

const moduloDeDos = numero => numero%2

console.log(moduloDeDos(3))
console.log(moduloDeDos(5))

// Ejemplo módulo

// const parImpar = (numero)=>{
//   const moduloDos = numero%2
//   if(moduloDos === 1){
//     console.log(`${numero} es impar`)
//   } else if (moduloDos === 0) {
//     console.log(`${numero} es par`)
//   } else {
//     console.warn("Se ingreso un dato incorrecto")
//   }
// }

// parImpar(5)
// parImpar(4867)
// parImpar(1558)
// parImpar("hola")


// Hoisting 

saludar() // Hoisting me permite invocarla antes de ser declararada
function saludar(){
  alert("hola")
} 
// despedirse() Las funciones anónimas no tienen hoisting
const despedirse = ()=>{
  alert("chau")
}

despedirse()