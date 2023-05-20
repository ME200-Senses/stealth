import React from 'react'
import "./navBar.css"
const navBar = () => {
  return (
    <div className="container">
          <nav className="mainnav">
            <div className="name">
              <a href="/" className='one'>File Manager</a>
            </div>
            <div className="but">
            <input type="file" id="actual-btn" hidden />
            <label for="actual-btn">+ Upload</label>
            </div>
          </nav>
    </div>
  )
}

export default navBar
