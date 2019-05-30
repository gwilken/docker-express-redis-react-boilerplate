import React from 'react'

const DynamicPage = ({ match } ) => {
  const { params } = match

  return (
    <div>
      <h1> { params.text } </h1>
    </div>
  )
}

export default DynamicPage