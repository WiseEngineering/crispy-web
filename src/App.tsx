import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import PageWrapper from './components/PageWrapper'
import Routes from './Routes'

import './App.css'

class App extends Component {
  render(): JSX.Element {
    return (
      <BrowserRouter>
        <div className="App">
          <PageWrapper>
            <Routes />
          </PageWrapper>
        </div>
      </BrowserRouter>
    )
  }
}
export default App
