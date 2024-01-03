const botoncito = document.getElementById("botoncito")

// botoncito.onclick = function(){
//   alert("me hiciste click")
// }
// botoncito.onclick = function(){
//   alert("gracias")
// }

botoncito.addEventListener("click", ()=>{
  alert("No me toques")
})
botoncito.addEventListener("click", ()=>{
  alert("De verdad no")
})

// console.dir(botoncito)

const formulario = document.getElementById("formulario")
const keylogger = document.getElementById("keylogger")

keylogger.addEventListener("change", (evento)=>{
  console.log(evento.target.value)
})
// keylogger.addEventListener("keydown", (evento)=>{
//   console.log(evento.key)
// })