export function esPalindromo (texto) {
  texto = texto.toLowerCase().replace(/\s+/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  // Si la cadena puesta al revés es igual que la original, será palíndromo
  // eslint-disable-next-line func-call-spacing
  const inversa = texto.split('').reverse().join('')
  // Sustituímos este if de 2 únicas opciones, por un TERNARIO
  //   (texto === inversa)
  //  ? window.alert(`El texto ${texto} es un palíndromo`)
  //  : window.alert(`El texto ${texto} no es un palíndromo`)
  return texto === inversa
}
