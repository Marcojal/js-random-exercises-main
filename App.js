import { adivinelo, generarAleatorio, mayusculasMinusculas } from './components'

export function App () {
  document.querySelector('#b_generar').addEventListener('click', generarAleatorio)
  document.querySelector('#b_aleatorio').addEventListener('click', adivinelo)
  document.querySelector('#enlace_1').addEventListener('click', mayusculasMinusculas)
  document.querySelector('#enlace_2').addEventListener('click', function (ev) {
    ev.preventDefault()
    const texto = window.prompt('Escriba un texto')
    if (texto === null || texto === '' || texto === Number(texto)) return
    esPalindromo(texto)
  })
}
// función que coge un texto y comprueba si es palíndromo
function esPalindromo (texto) {
  texto = texto.toLowerCase().replace(/\s+/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  // Si la cadena puesta al revés es igual que la original, será palíndromo
  // eslint-disable-next-line func-call-spacing
  const inversa = texto.split().reverse().join('')
  // Sustituímos este if de 2 únicas opciones, por un TERNARIO
  //   (texto === inversa)
  //  ? window.alert(`El texto ${texto} es un palíndromo`)
  //  : window.alert(`El texto ${texto} no es un palíndromo`)
  if (texto === inversa) {
    window.alert(`El texto ${texto} es un palíndromo`)
  } else {
    window.alert(`El texto ${texto} no es un palíndromo`)
  }
}
