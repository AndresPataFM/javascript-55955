const botonSWAL = document.getElementById("boton")
const botonToast = document.getElementById("botonToastify")

// botonSWAL.addEventListener("click", ()=>{
//     Swal.fire({
//         icon: 'success',
//         title: 'Gracias',
//         text: '¡Fianlmente alguien me hizo click!'
//     })
// })

// botonSWAL.addEventListener("click", async ()=>{
//     const { value: text } = await Swal.fire({
//         title: 'Ingrese su nombre',
//         input: 'text',
//         inputLabel: 'Nombre',
//         inputPlaceholder: 'Juan'
//     })
//     console.log(text)
// })


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

botonSWAL.addEventListener("click", async ()=>{
    Toast.fire({
        icon: 'success',
        title: 'Producto agregado al carrito'
    })
})

// toastify

botonToast.addEventListener("click", ()=>{
    Toastify({
        text: "hola soy un toast",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right, red, orange)",
        },
        onClick: function(){
            Swal.fire({
                icon: 'error',
                title: 'Auch',
                text: '¡No me toques!'
            })
        }
    }).showToast();
})

// Luxon

let DateTime = luxon.DateTime;
console.dir(DateTime)
console.log(DateTime.now().toLocaleString(DateTime.DATETIME_SHORT))