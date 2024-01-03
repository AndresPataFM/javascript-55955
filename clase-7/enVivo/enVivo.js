// 🔶 Encontrar Nodos 🔶
// 🔹 document.getElementById 🔹
// array.find
const encontrame = document.getElementById("encontrame")
// console.log(encontrame)
// console.dir(encontrame)

// 🔹 document.getElementsByClassName 🔹
// array vivo
// array.filter
const rojos = document.getElementsByClassName("rojo")
// const rojos = document.getElementsByClassName("rojo cursiva")
// console.log(rojos)
// console.dir(rojos)

// 🔹 document.getElementsByTagName 🔹
const divs = document.getElementsByTagName("div")
// console.dir(divs)

// 🔹 document.querySelector 🔹
const queryRojo = document.querySelector(".rojo")
// console.log(queryRojo)

// 🔹 document.querySelectorAll 🔹
const queryRojos = document.querySelectorAll("ul")
// console.log(queryRojos)

// 🔶 Modificar Nodos 🔶
console.dir(encontrame)
encontrame.innerHTML = `
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Collage_of_Six_Cats-02.jpg/250px-Collage_of_Six_Cats-02.jpg" />
<ol>
    <li>Primero</li>
    <li>Segundo</li>
    <li>Tercero</li>
</ol>
`
const trabajo = document.getElementById("trabajo")

trabajo.innerText = "<div>BIENVENIDO A MI PÁGINA</div>"

// 🔶 Crear Nodos 🔶
const listaDeberes = document.getElementById("listaDeberes")
const deberes = ["Terminar el código", "Hacer correcciones", "Preparar la próxima clase", "dormir"]

deberes.forEach(deber => {
    const li = document.createElement("li")
    li.innerText = deber
    listaDeberes.appendChild(li)
});

const header = document.createElement("header")
header.innerHTML = `
<h1> Página de Prueba </h1>
<nav>
    <ul>
        <li>link</li>
        <li>link</li>
        <li>link</li>
    </ul>
</nav>

`
document.body.insertBefore(header, document.body.children[0])

// 🔶 Eventos 🔶


// ============

// const gato = {
//     nombre: "Sacarías"
// }
// console.log(gato)
// gato.nombre = "Pepe"
// console.log(gato)

