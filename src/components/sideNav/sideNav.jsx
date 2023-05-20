import React from 'react'
import "./sideNav.css"
const sideNav = () => {
  return (
    <div className="main">
        <div className="sidenav">
          <div className="upper">
            <div className="logo"></div>
            <a href="/" className='stealth'>Stealth</a>
          </div>
          <div className="bar"></div>
          <div className="lower">
            <div className="seclogo"></div>
            <a href="/" className='file'>File Manager</a>
          </div>
        </div>
      </div>
  )
}

export default sideNav
