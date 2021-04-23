import React from 'react'
import "../styles/Navbar.css";

function Navbar() {
    return (
      <Navbar className="bg-light justify-content-between">
      <div inline>
      </div>
      <div inline>
        <nav type="text" placeholder="Search" className=" mr-sm-2" />
      </div>
    </Navbar>
    )
}

export default Navbar
