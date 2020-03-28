import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import { Stellar } from './stellar/index'

const mountNode = document.getElementById('mountNode')

ReactDOM.render(<Stellar />, mountNode)
