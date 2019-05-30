import React from 'react'
import Card from './Card'

const cards = [{title: 'card a'},{title: 'card b'},{title: 'card c'}]

const PageOne = (props) => {
  return (
    <div>
      { cards.map((elem, index) => <Card title={elem.title} key={elem.title + index} />) }
    </div>
  )
}

export default PageOne