import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card-container">
        <div className="card-title">
          { props.title }
        </div>
      </div>
    </div>
  )
}

export default Card