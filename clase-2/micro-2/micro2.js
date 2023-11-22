// Actividad 01:
/* 
let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');

for (let index = 0; index < cantidad; index) {
  console.log(texto);
} 
*/

// let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
// let texto = prompt('INGRESE TEXTO A REPETIR');

// for (let index = 0; index < cantidad; index++) {
//   console.log(texto);
// }

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?


// Actividad 02:
/* 
let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
  if (index > 3) {

  }
  alert("lado");
} 
*/

// control de asensor en planta baja
let pisos = prompt('Ingrese al piso que desea ir');
for (let index = 1; (index <= pisos) && (pisos <= 21) ; index++) {
  if (index === 13) {
    continue
  }
  alert(`piso nro ${index}`);
}

// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?
// ¿Qué propuesta podrías hacer para que tenga sentido su uso?
