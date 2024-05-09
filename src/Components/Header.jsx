import React from 'react'
import "../Components/Header.css"
const Header = () => {
  return (
    <>
       <header>
                <div id="logo"><i className="fa-brands fa-chrome"></i>Download</div>
                <div id="search">
                    <div className="i-search"><i className="fa-solid fa-magnifying-glass"></i></div>
                    <input type="text" name="" className="search-bar" placeholder="Search download" autoFocus />
                </div>
                <div id="colom">
                <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </header>
            <div id="profile">
                <p> <i className="fa-solid fa-user"></i> Your <u style={{ color: 'rgb(0, 68, 255)', cursor: 'pointer' }}>profile is manage</u> by sabaicode.com</p>
            </div>
    </>
  )
}

export default Header