import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './hello'

console.log('start ReactDOM.render')

ReactDOM.render(
  <Hello/>,
  document.body
)

console.log('end ReactDOM.render')

console.log('#hello', document.getElementById('hello'))
console.log('#inner', document.getElementById('inner'))
