import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { URLS } from './utils/links'
import Homepage from './views/Homepage'
import NotFound from './components/NotFound'

class Routes extends Component {
  render(): JSX.Element {
    return (
      <div>
        <Route exact path={URLS.HOME} component={Homepage} />
        <Route exact path='*' component={NotFound} />
      </div>
    )
  }
}

export default Routes
