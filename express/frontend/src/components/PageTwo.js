import React from 'react'
import Card from './Card'

const cards = [{title: 'card d'}, {title: 'card e'}, {title: 'card f'}]

const PageTwo = (props) => {
  return (
    <div>
      { cards.map((elem, index) => <Card title={elem.title} key={elem.title + index} />) }
    </div>
  )
}

export default PageTwo