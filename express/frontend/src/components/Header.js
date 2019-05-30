import React from 'react'
import { Link } from 'react-router-dom'

import '../css/Header.scss'

const items = [{
  title: 'pageone',
  link: '/pageone'
}, 
{
  title: 'pagetwo',
  link: '/pagetwo'
},
{
  title: 'pagethree',
  link: '/pagethree'
}, 
{
  title: 'pagefour',
  link: '/pagefour'
}]

const Header = (props) => {
  return (
    <div className="header-container">

      <div className="logo-container">Site Logo</div>
    
      <ul className="links-container">
        { items.map((elem, index) => 
          <li key={elem.link + index}> 
            <Link to={ elem.link }> 
              { elem.title }
            </Link>
          </li>  
        )}
      </ul>
    </div>
  )
}

export default Header