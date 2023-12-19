// const objeto = {
//   clave: valor,
//   clave2: valor,
//   // ...
//   claveFinal: valorFinal,
// }

// const objeto = {
//   propiedad1: "hola",
//   propiedad3: [1,2,3],
//   propiedad2: 4555,
//   metodo: function(){
//     alert("hola")
//   }
// }

// console.log(objeto)

// console.log(objeto.propiedad1)

// // console.log(objeto["metodo"]())

// objeto.propiedad1 = "chau"
// objeto.propiedad4 = true
// objeto["propiedad fea"] = "No me usen"
// console.log(objeto)
// console.log(objeto["propiedad fea"])

const michifus = {
  nombre: "Michifus",
  maullido: "Miauuuuuus",
  edadMeses: 49,
  maullar: function(){
    console.log(this.maullido)
  },
  maulalrRoto: ()=>{
    console.log(this.maullido)
  },
  presentar: function(){
    console.log(`Este es ${this.nombre}, es un gatito de ${this.edadMeses} meses y su maullido es ${this.maullido}`)
  }
}

// michifus.maullar()
// michifus.presentar()

function Gato(nombre, edadMeses, maullido){
  this.nombre = nombre;
  this.edadMeses = edadMeses;
  this.especie = "Gato";
  this.maullido = maullido;
  this.maullar = function(){
    console.log(this.maullido)
  }
  this.presentar = function(){
    console.log(`Este es ${this.nombre}, es un gatito de ${this.edadMeses} meses y su maullido es ${this.maullido}`)
  }
}

const zacarias = new Gato("Zacarias", 78, 'Mau')

const gatos = [
  new Gato("Zacarias", 78, 'Mau'),
  new Gato("Pepe", 38, 'Miau'),
  new Gato("Matilda", 28, 'Maus'),
  new Gato("Raton", 128, 'Miu')
]

// console.log(gatos)

// gatos[3].presentar()

class Perro{
  constructor(nombre, genero, edad){
    this.nombre = nombre
    this.genero = genero
    this.edad = edad
    this.raza = 'Perro'
  }
  ladrar(){
    alert("Guau")
  }
  presentar(){
    console.log(`Este es el perrito ${this.nombre}, tiene ${this.edad} años y es un/a ${this.genero}`)
  }
}

const firulais = new Perro("Firulais", "Macho", 3)
// console.log(firulais)
// console.log(firulais.presentar())

// const pirulo = firulais

// console.log("firulais", firulais)
// pirulo.nombre = "Pirulo"
// console.log("pirulo", pirulo)
// console.log("firulais", firulais)

// const array1 = [0,1,2]
// // No copia, hace referencia al no ser dato pritivo
// const array2 = array1

// array2.push(3)

// console.log(array1)

// datos primitivos no sucede

let dato1 = 7
let dato2 = dato1

dato2 += 4

// console.log(dato1)
// console.log(dato2)

// class Usuario {
//   // usuario de un foro
//   #reviews;
//   #comentarios;
//   #password;
//   constructor(nombre, mail){
//     this.nombre = nombre;
//     this.mail = mail;
//     this.#reviews = 0
//     this.#comentarios = 0
//     this.#password = "123"
//   }
//   get getReviews (){
//     return `El usuario ${this.nombre} hizo hasta el momento ${this.#reviews}`
//   }
//   set setReviews(reviews){
//     const reviewsNumero = parseInt(reviews)
//     if(isNaN(reviewsNumero) || reviewsNumero <= 0){
//       console.warn("Use un número entero superior a 0")
//     } else {
//       this.#reviews+= reviewsNumero
//     }
//   }
// }

// const jaime = new Usuario("Juan78", "juan@juan.juan")
// console.log(jaime)
// jaime.#reviews = -4 // error al ser privado

class Animal{
  constructor(especie, cantidadExtremidades){
    this.especie = especie
    this.cantidadExtremidades = cantidadExtremidades
  }
  static descripcion(){
    console.log("Este Animal es un ser vivo")
  }
}

const cangrejo = new Animal("cangrejo", 8)
const insecto = new Animal("isnecto", 6)
const ave = new Animal("ave", 5)

// console.log(cangrejo)
// Animal.descripcion()

// Agregar al storage
localStorage.setItem("numero-de-la-suerte", 4)

// Buscar en storage

const numeroDeLaSuerte = localStorage.getItem("numero-de-la-suerte")

// console.log(numeroDeLaSuerte)

// Me lo convirtio todo a un string y lo rompio
// localStorage.setItem("perroFavorito", firulais)

// Lo convierto en uns tring JSON con el objeto JSON
// JSON JavaScript Object Notation || notación de objetos de javascript
// localStorage.setItem("perroFavorito", JSON.stringify(firulais))

// me trae el dato como string JSON
// const perroFavorito = localStorage.getItem("perroFavorito")

// Lo parseo
// const perroFavorito = JSON.parse(localStorage.getItem("perroFavorito"))

// paso a paso
// 1 convierto el objeto a guardar
const perroAGuardarJSON = JSON.stringify(firulais)

// 2 guardo el JSOn en storage
localStorage.setItem("perroFavorito", perroAGuardarJSON)

// 3 traigo el objeto
const perroJSON = localStorage.getItem("perroFavorito")
// console.log(perroJSON)

// 4 Lo parseas
const perroParseado = JSON.parse(perroJSON)
// console.log(perroParseado)

// 5 paso por clase para recuperar métodos
const perroFavorito = new Perro(perroParseado.nombre, perroParseado.genero, perroParseado.edad)
// console.log(perroFavorito)

let carrito = []
const carritoJSON = sessionStorage.getItem("carrito")
if(carritoJSON !== null){
  carrito = JSON.parse(carritoJSON)
}

console.log(carrito)

function agregarProd(producto){
  carrito.push(producto)
  sessionStorage.setItem("carrito", JSON.stringify(carrito))
  console.log(carrito)
}

const array1 = [0,1,2]
// No copia, hace referencia al no ser dato pritivo
const array2 = array1

array2.push(3)
console.log("1", array1)
console.log("2", array2)

const array3 = [0,1,2]
// No copia, hace referencia al no ser dato pritivo
const array4 = JSON.parse(JSON.stringify(array1))

array2.push(3)
console.log("3", array3)
console.log("4", array4)

