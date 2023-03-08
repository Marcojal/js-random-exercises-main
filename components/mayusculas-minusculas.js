import { validarMayusculasMinusculas } from '../helpers/validar-mayusculas-minusculas'

// sw interruptor
let sw = true

// Funcion: validar-mayusculas-minusculas

// cada vez que se escribe se pasa por esta función; queremos que se pinte resultado a la vez que se escribe
function handleInput (event) {
  const value = event.target.value.trim()
  event.target.nextElementSibling.textContent = validarMayusculasMinusculas(value)
}

export function mayusculasMinusculas (event) {
  event.preventDefault()

  if (sw) {
    const liEl = event.target.parentElement

    // Zona Creación elementos
    // creamos el contenedor padre
    const divContainer = document.createElement('div')

    // creamos input para escuchar entrada de datos
    const inputEl = document.createElement('input')
    inputEl.setAttribute('name', 'entrada-datos')
    inputEl.addEventListener('input', handleInput)

    // Creamos un strong para pintar mensajes
    const strongEl = document.createElement('strong')
    strongEl.setAttribute('class', 'mensaje')

    // aquí anidamos los datos; input es un evento que pasa al callback "handleInput", por lo q tb pasa a la función definida arriba
    divContainer.append(inputEl)
    divContainer.append(strongEl)
    liEl.append(divContainer)

    // apago el interruptor para asegurarme que la operación se haga solo una vez
    sw = false
  }
}
