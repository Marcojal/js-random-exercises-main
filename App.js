import { adivinelo } from './components/adivinelo'
import { generarAleatorio } from "./components/generar-aleatorio"

let sw = true

function mayusculasMinusculas(event) {
 event.preventDefault()
 if (sw) {
  const liEl = event.target.parentElement
  const divContainer = document.createElement('div')
  divContainer.innerHTML = '<input id = "myInput" type = "text" name = "input" >'
  liEl.append(divContainer)
  sw = false
 }
}
// const papi = document.querySelector('#enlace_1').parentElement

// if (texto === texto.toLowerCase())
//  return ((`el texto ${texto} está en minúsculas`))
// else if (texto === texto.toUpperCase())
//  return ((`el texto ${texto} está en mayúsculas`))
// else}

export function App() {
 document.querySelector('#b_generar').addEventListener('click', generarAleatorio)
 document.querySelector('#b_aleatorio').addEventListener('click', adivinelo)
 document.querySelector('#enlace_1').addEventListener('click', mayusculasMinusculas)
}

