import { esPalindromo } from '../helpers/esPalindromo'

export default function (ev) {
  ev.preventDefault()
  const texto = window.prompt('Escriba un texto')
  if (texto === null || texto === '' || texto === Number(texto)) return
  if (esPalindromo(texto)) {
    window.alert(`El texto ${texto} es un palíndromo`)
  } else {
    window.alert(`El texto ${texto} no es un palíndromo`)
  }
}
