import { getRandom } from "../helpers/get-random"

export function generarAleatorio () {
 const output = document.createElement('code')
 output.textContent = getRandom()
 document.querySelector('#serie_generar').appendChild(output)
}