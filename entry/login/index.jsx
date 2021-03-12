import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDom from 'react-dom'

import App from '@src/pages/Login'

import './index.scss'
import './theme.scss'

ReactDom.render(<App />, document.getElementById('app'))
