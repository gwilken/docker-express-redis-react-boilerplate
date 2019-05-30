import React from 'react'
import DataView from './DataView'
import { pushData } from '../js/actions'
import store from '../js/store'


const PageThree = () => {
  return (
    <div>
      <button onClick={ () => store.dispatch(pushData('test')) }>add data</button>
      <DataView />
    </div>
  )
}

export default PageThree