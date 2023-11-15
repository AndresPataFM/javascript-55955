// ++
let i =0

i++
// es igual que
i = i+1

// --
i--
i=i-1

// +=
i+=5
i=i+5

// -=
i-=7
i=i-7

// arrow functions

function hola(){
    console.log("hola")
}
const hola2 = ()=>{console.log("hola")}

// ternario
// otra manera de escribir if/else
// let validar = confirm()
// if(validar){
//     return "es verdadero"
// } else {
//     return "es falso"
// }
// validar ? "es verdadero" : "es falso"

// Spread operator
// ...
// esparce el contenido

const array1 = [1,2,3]
const array2 = [...array1, 4,5,6]


// rest parameters
function mostrar(...dato){
    console.log(dato)
}

// Operadores lógicos

// &&
// const a = valor1 && valor2
// si valor1 es turthy, utiliza al valor2, sino utiliza al valor1

// ||
// const b = valor1  valor2
// si valor1 es turthy, lo utiliza, sino utiliza al valor2

// Destructuring

const producto = {
    name:"Antipulgas Gato", 
    id:"001",
    type:"Medicinal", 
    price:450, 
    stock:32, 
    description:"Antipulgas felino Frontline Plus"
}
// sin alais
const {name, id, type} = producto
// con alias
const {name: nombreProd, id: idProd, type: typeProd} = producto

console.log("nombreProd", nombreProd)
// en parametro

function mostrarProducto({name, id, type, price, stock, description}){
    console.log(name)
    console.log(id)
    console.log(type)
    console.log(price)
    console.log(stock)
    console.log(description)
}

mostrarProducto(producto)

