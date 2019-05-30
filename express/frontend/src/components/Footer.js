import React from 'react'

import '../css/Footer.scss' 

const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="links-container">
        <li><a href="/pageone">Link 1</a></li>
        <li><a href="/pagetwo">Link 2</a></li>
        <li><a href="/pagethree">Link 3</a></li>
      </ul>
    </div>
  )
}

export default Footer