//  Ejemplo objeto literal

const usuario = {
  nombre: "andres",
  mail: "asd@asd.com",
  contrasenia: "asd342asd",
  mostrarDatos: function(){
    alert(`nombre: ${usuario.nombre} | mail: ${usuario.mail} | contraseña ${usuario.contrasenia}`)
  }
}

// console.table(usuario)
// console.log(usuario.nombre)
// console.log(usuario["nombre"])

// usuario.mostrarDatos()


// Array

const nombres = ["andres", "jeremias", "diana", "juan", "mauro", "ezequiel","pepe"]

// console.log(nombres)
// console.table(nombres)

// console.log(nombres[2])

// console.log("length", nombres.length)

let arrayTrabajo = [1, 2, 24, 3, 7, 58,2]
console.log(arrayTrabajo)

// arrayTrabajo.push(44)
// console.log(arrayTrabajo)

// arrayTrabajo.unshift(57)
// console.log(arrayTrabajo)

// arrayTrabajo.shift()
// console.log(arrayTrabajo)

// const elementoQuitado = arrayTrabajo.pop()
// console.log(elementoQuitado)
// console.log(arrayTrabajo)

// 100% manual me vuelvo chino y no es escalable
// arrayTrabajo = [1, 2, 3, 4]
// arrayTrabajo[5] = 7
// console.log(arrayTrabajo)

// console.log("join", typeof arrayTrabajo.join(), arrayTrabajo.join(""))

// console.log(arrayTrabajo.indexOf(2))

// console.log(arrayTrabajo.lastIndexOf(2))

// console.log(arrayTrabajo.indexOf("hola"))

// console.log(arrayTrabajo.includes(-78))

// arrayTrabajo.sort()
// arrayTrabajo.reverse()
// console.log(arrayTrabajo)

console.log(nombres)
nombres.sort()
console.log("A-Z",nombres)
nombres.reverse()
console.log("Z-A",nombres)


// Si el array nombres es donde guardo los que estuvieron presentes en clase, crear una función que me indique si un nombre dado estaba presente en la clase

function presente(nombre){
  let encontrado = false
  for(let i = 0; i < nombres.length; i++){
    if(nombre === nombres[i]){
      console.log(`${nombre} presente`)
      encontrado = true
    }
  }
  if(!encontrado){
    console.log("alumno/a no encontrado")
  }
}

function presenteIndexOf(nombre){
  let indice = nombres.indexOf(nombre)
  if(indice === -1){
    console.log("alumno no encontrado")
  } else {
    console.log(`El alumno/a ${nombres[indice]} fue encontrado`)
  }
}

function presenteIncludes(nombre){
  let existe = nombres.includes(nombre)
  if(existe){
    console.log("alumno/a no encontrado")
  } else {
    console.log("El alumno/a fue encontrado")
  }
}

// presenteIndexOf("diana")

// Para esto se usa un for in que vemos en la clase de objetos
const obj ={
  a : [1,2,3],
  b : [4,5,6],
  c : [4,1,3]
}

// for(prop of obj){
//     console.log(prop)
// }


// const array = [
//     {a: [1,2,3], b:[88,45,76]},
//     {a: [4,5,6], b:[4,5,6]},
//     {a: [7,8,9], b:[42,53,62]}
// ]


// for( elemento of array ){
//     console.log(elemento.a, elemento.b)
// }




// Tarea, intenten hacer una funcion apra arrays que imite el funcionamiento de reverse