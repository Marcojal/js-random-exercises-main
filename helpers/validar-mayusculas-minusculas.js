// esta función valida; solamente informa el return en consola; hay que pintarlo.
export function validarMayusculasMinusculas (texto) {
  if (texto === texto.toLowerCase()) { return `el texto ${texto} está en minúsculas` } else if (texto === texto.toUpperCase()) { return `el texto ${texto} está en mayúsculas` } else { return 'de todo un poco' }
}
