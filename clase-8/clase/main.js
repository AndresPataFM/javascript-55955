// setTimeout(function(){
//   console.lod("Pasaron 5 segundos")
// }, 5000)

// function tresSegundos(){
//   console.lod("Pasaron 3 segundos")
// }
// setTimeout(tresSegundos, 3000)


// setTimeout(()=>console.log(1), 1000)
// setTimeout(()=>console.log(2), 3000)
// setTimeout(()=>console.log(3), 5000)
// setTimeout(()=>console.log(4), 0)
// console.log(5)

// const countdown = setTimeout(()=>console.log("hola"), 5000)

// clearTimeout(countdown)
// console.log(countdown)
// let numero = 1
// const intervalo = setInterval(()=>{
//   console.log(numero++)
// }, 1000)

// setTimeout(()=>{
//   console.log("Alto")
//   clearInterval(intervalo)
// }, 10001)
// console.log("hola")

// try {
//   for(let i=0; i<5; i++){
//     console.log(i)
//   }
//   const numero = 5
//   // numero = "string"
//   console.log("Estoy aca en el medio")
// } catch (error) {
//   console.log("Error :", error)
// } finally {
//   console.log("finalize")
// }
// console.log("chau")


// const datos = ["🍕","🍔","🍟","🌭",]
// console.log("Bienvenido")

// try{
//   const ul = document.createElement("ul")
//   // simulamos que pedimos datos a una base de datos
//   datos.forEach((dato)=>{
//     const li = document.createElement("li")
//     li.innerText=dato
//     ul.appendChild(li)
//   })
//   document.body.appendChild(ul)
// } catch (err){
//   console.log("Error: ", err)
// }

// let datos = []

const baseDatos = new Promise((resolve, reject)=>{
  resolve(["🍕","🍔","🍟","🌭",])
})

// try{
//   console.log("pedir datos")
//   const ul = document.createElement("ul")
//   baseDatos.then(datosRecibidos=>{
//     datos = datosRecibidos
//     console.log("recibi datos")
//     // simulamos que pedimos datos a una base de datos
//     datos.forEach((dato)=>{
//       const li = document.createElement("li")
//       li.innerText=dato
//       ul.appendChild(li)
//     })
//     document.body.appendChild(ul)
//     console.log("genere lista")
//   }).catch(err=>console.warn(err))
// } catch (err){
//   console.log("Error: ", err)
// }

// fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(respuesta=>{
//   return respuesta.json()
// }).then(respuestaJs=>{
//   console.log(respuestaJs)
// })

// async function pedirPokemon(){
//   try {
//     const datosJSON = await fetch("https://pokeapi.co/api/v2/pokemon")
//     const datos = await datosJSON.json()
//     console.log(datos.results)
//     const ul = document.createElement("ul")
//     datos.results.forEach(element => {
//       const li = document.createElement("li")
//       li.innerText = element.name
//       ul.appendChild(li)
//     });
//     document.body.appendChild(ul)
//   } catch (error) {
//     console.warn(error)
//   }
// }

// pedirPokemon()