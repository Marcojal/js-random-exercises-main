import { adivinelo, generarAleatorio, mayusculasMinusculas } from './components'

export function App () {
  document.querySelector('#b_generar').addEventListener('click', generarAleatorio)
  document.querySelector('#b_aleatorio').addEventListener('click', adivinelo)
  document.querySelector('#enlace_1').addEventListener('click', mayusculasMinusculas)
}
