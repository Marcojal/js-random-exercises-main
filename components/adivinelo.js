import { getRandom } from '../helpers/get-random'
let tirada = 0
let tiradas = []
// uso de la función exportada getRandom para cambiar número
let numeroRandom = getRandom(101, 1)
// coger entrada de datos (ojo con poner el .value, que no permitiría cambiar en cada tirada)
const aleatorioInput = document.querySelector('#aleatorio')

export function adivinelo() {
 console.log(numeroRandom)
 // que solo llegue a 10 tiradas:
 if (tirada >= 10) return
 // hay un numero? solo pasa de aquí si es un número. Garantizo que el numero llegue limpio de espacios
 if (isNaN(aleatorioInput.value)) return

 // almaceno cada tirada en un Array
 tiradas.push(aleatorioInput.value.trim())

 // Hasta aquí las tiradas son válidas puesto que creo la Variable TIRADAS, arriba en un Array
 // mostramos el número de tiradas y números introducimos por el usuario

 // LÓGICA (recojo ya el número random definitivo)
 const numero = Number(aleatorioInput.value)

 if (numero === numeroRandom) {
  tirada = 10
  document.getElementById('msg_aleatorio').textContent = `Ganaste!`
  return
 } else if (numero > numeroRandom) {
  document.getElementById('msg_aleatorio').textContent = `El número es más pequeño. Tirada ${tirada + 1}`
 } else {
  document.getElementById('msg_aleatorio').textContent = `El número es más grande. Tirada ${tirada + 1}`
 }

 document.getElementById('serie_aleatorio').textContent = tiradas.join()

 tirada++
}
