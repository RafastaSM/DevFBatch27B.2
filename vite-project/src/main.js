import './styles/style.css'

import HolaMundo from './components/Holamundo.js'

document.querySelector('#app').innerHTML = `
  ${HolaMundo()}
`
