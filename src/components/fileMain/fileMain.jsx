import React from 'react'
import "./fileMain.css"
import Fileapi from '../fileapi/fileapi'
import Categoryapi from '../Categoryapi/Categoryapi'
const fileMain = () => {
  return (
    <div className="work">
            <div className="search">
                <input type="text" className="search-input" placeholder= "Search by name" />
            </div>
            <Categoryapi></Categoryapi>
            <Fileapi></Fileapi>
            
    </div>
  )
}

export default fileMain
