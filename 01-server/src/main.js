import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <button id="add-btn">Add</button>
  <button id="subtract-btn">Subtract</button>
`
setupCounter()
