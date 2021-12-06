import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './global/globalStyles'

import Routes from '../src/routes/index'

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
    <GlobalStyle />
  </BrowserRouter>
)
export default App
