function conseguirDatos(){
  const datos = new Promise(function(resolve, reject){
    // Arbitrariamente le doy chance de fallar para mostrar ambos casos
    if(Math.random()>=0.5){
      resolve([1,2,3,4])
    } else {
      reject("mala suerte")
    }
  })
  // Se ve como promesa incompleta (pending)
  console.log(datos)
  return datos
}

// Como no es asincrónico se ve como promesa incompleta (pending)
console.log(conseguirDatos())

conseguirDatos().then(respuesta =>{
  // Como verificamos asincrónicamente LUEGO de que se resolvio la promesa, vemos el Fulfilled o el Rejected
  console.log(respuesta)
}).catch(e=> console.warn(e))