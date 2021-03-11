import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDom from 'react-dom'

import App from '@src/pages/Login'

ReactDom.render(<App />, document.getElementById('app'))
