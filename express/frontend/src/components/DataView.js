import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { data: state.data }
}


class DataViewRedux extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render () {
    return (
      <div>
        <p>data:{ this.props.data.length }</p>
      </div>
    )
  }
}


const DataView = connect(mapStateToProps)(DataViewRedux)

export default DataView