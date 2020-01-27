import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import PageWrapper from './components/PageWrapper'
import Routes from './Routes'
import { ApolloProvider } from './ApolloProvider'

import './App.css'

class App extends Component {
  render(): JSX.Element {
    return (
      <ApolloProvider>
        <BrowserRouter>
          <div className="App">
            <PageWrapper>
              <Routes />
            </PageWrapper>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}
export default App
