import React, { Component } from 'react'
import Route from './components/Route'
import { URLS } from './utils/links'
import Homepage from './views/Homepage'

class Routes extends Component {
  render(): JSX.Element {
    return (
      <div>
        <Route exact path={URLS.HOME} component={Homepage} />
      </div>
    )
  }
}

export default Routes
