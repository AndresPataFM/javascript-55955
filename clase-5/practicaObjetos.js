//Declarar objetos
const gato = {
    nombre: "Michufus",
    pelaje: "Negro",
    edadAnios: 3,
    maullar: function(){
        alert("miau")
    },
    mostrarDatos: function(){
        return `Nombre: ${this.nombre}, pelaje: ${this.pelaje} y edad: ${this.edadAnios}`
    },
    mostrarThis: function(){
        console.log(this)
    },
    arrow:()=>{
        console.log(this)
    }
}

// console.log(gato)

// // // buen metodo
// // console.log(gato.nombre)

// // // controversial
// // console.log(gato["pelaje"])

// // // Agregar
// // console.log(gato.callejero=false)

// console.log(gato)

// // Metodo
// // gato.maullar()
// // console.log(gato.mostrarDatos())
// gato.mostrarThis()
// gato.arrow()

// Funcion constructora
// ClaseCoder
const Animal = function (especie, nombre){
    this.especie = especie
    this.nombre = nombre
    this.miau = function (){alert("miau")}
}

// SIN new NO CREA EL OBJETO
const michifus = new Animal("gato", "Michifus")

// console.log(michifus)

class Mascota{
    constructor(nombre, especie, duenio, edad){
        this.nombre = nombre
        this.especie = especie
        this.duenio = duenio
        this.edad = edad
        this.callejero = false
    }
    presentar = function(){
        return `Hola soy ${this.nombre}, soy un ${this.especie} y me familia es ${this.duenio}`
    }
}

const firulais = new Mascota("Firulais", "Perro", "Nepomuzeno", 4)
console.log(firulais)
