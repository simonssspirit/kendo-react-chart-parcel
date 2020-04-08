import React, { useState, createContext } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './layout/Header'
import Sidebar from './layout/Sidebar'
import Main from './layout/Main'
import { BaseCSS } from 'styled-bootstrap-grid'
import '@progress/kendo-theme-material/dist/all.css'

const GlobalStyle = createGlobalStyle`
  body {
    background-size: cover;
    margin: 0;
    height: 100%;
    font-family: Roboto, sans-serif;
  }
  .k-animation-container{
    z-index: 10003
  }
  .k-notification-group{
    z-index: 10003
  }
`

const Content = styled.div`
  padding: 0;
  min-height: 100vh;
  font-family: Open Sans, Helvetica Neue, sans-serif;
  font-size: 14px;
  color: #333;
`

const LayoutContext = createContext()

const App = () => {
  const [state, setState] = useState({ isSidebarActive: true })
  return (
      <Content>
        <GlobalStyle />
        <BaseCSS />
        <LayoutContext.Provider value={{ state, setState }}>
          <Router>
              <Header />
              <Sidebar />
              <Main />
          </Router>
        </LayoutContext.Provider>
      </Content>
  )
}

render(React.createElement(App), document.getElementById('root'))

export default App
export { LayoutContext }
