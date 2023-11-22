// const bebida = prompt("Ingrese su bebida").toLowerCase()

// if(bebida === "coca" || bebida === "jugo" || bebida === "agua"){
//   const hielo = confirm(`Desa hielo con su ${bebida}.`)
//   if(hielo){
//     alert(`Aca tiene su ${bebida} con hielo`)
//   } else {
//     alert(`Aca tiene su ${bebida} sin hielo`)
//   }
// } else {
// alert("No tenemos esa bebida")
// }


/* const bebida = prompt("Ingrese su bebida").toLowerCase()
const argumento = bebida === "coca" || bebida === "jugo" || bebida === "agua"

if(argumento){
  const hielo = confirm(`Desa hielo con su ${bebida}.`)
  if(hielo){
    alert(`Aca tiene su ${bebida} con hielo`)
  } else {
    alert(`Aca tiene su ${bebida} sin hielo`)
  }
} else {
  alert("No tenemos esa bebida")
} 
*/

/* let nombre = prompt("diga su nombre").toLowerCase()

switch (nombre){
  case "andres":
    alert("1A")
    break
  case "diana":
    alert("1B")
    break
  case "jaime":
  case "juan":
    alert("2A")
    break
  case "laura":
    alert("2B")
    break
  case "matilda":
    alert("3")
    break
  default:
    alert("Usted no vive aqui")
} */

// let saludo = true

// while(saludo){
//     alert("¡HOLA!😀")
//     saludo = confirm("¿Otro saludo?")
// }

// let saludo = false
// let despedida = false

// while(saludo){
//     alert("¡HOLA!😀")
//     saludo = confirm("¿Otro saludo?")
// }

// do{
//     alert("¡Chau!😥")
//     despedida = confirm("¿Otra despedida?")
// } while(despedida) 

const pass = "qwerty"
let intentos = 0
let datoIngresado = ""

do{
  datoIngresado = prompt(`Ingrese su contraseña. Le quedan ${3-intentos} intentos`)
  intentos++
} while(pass !== datoIngresado && intentos <3)

if(datoIngresado === pass){
  alert("¡Bienvenido!")
} else {
  alert ("Ha fallado demasiados intentos, pruebe mas tarde.")
}