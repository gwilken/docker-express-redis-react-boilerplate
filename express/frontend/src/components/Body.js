import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'

import DynamicPage from './DynamicPage'

import '../css/Body.scss'

const Body = () => {
  return (
    <div className="body-container">
      <Switch>
        <Route path='/pageone' component={ PageOne } />
        <Route path='/pagetwo' component={ PageTwo } />
        <Route path='/pagethree' component={ PageThree } />
        <Route path='/dynamicpage/:text' component={ DynamicPage } />
      </Switch>
    </div>
  )
}

export default withRouter(Body)