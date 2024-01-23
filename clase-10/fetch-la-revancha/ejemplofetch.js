const apiURL = "https://xeno-canto.org/api/2/recordings?query=cnt:argentina"
// es una api sobre cantos de aves: https://xeno-canto.org/explore/api

const listaAves =  document.getElementById("aves")

function mostrarAves(arrayAves){
  listaAves.innerHTML = ""
  arrayAves.forEach(ave => {
    const {sp: especie, loc: ubicacion, rec: grabador, file: link} = ave
    const li = document.createElement("li")
    li.innerHTML= `
    <div style="display: flex; flex-direction: column;">
      <span>Especie: ${especie}</span>
      <span>Ubicación: ${ubicacion}</span>
      <span>Grabador: ${grabador}</span>
      <span><a href="${link}">Link de descarga</a></span>
    </div>`
    listaAves.appendChild(li)
  });
}

async function buscarAves(){
  const datosJSON = await fetch(apiURL)
  // console.log(datosJSON)
  const datos = await datosJSON.json()
  // console.log(datos)
  mostrarAves(datos.recordings)
  return datos
}

buscarAves().then(rta => {
  console.log(rta)
})
