import React, { Component } from 'react'
// import "./Style.css";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
          <Link  className='link' to="/home">Home</Link>
          <Link  className='link' to="/student">Students</Link>
          <Link  className='link' to = "/contact">Contact Us</Link>

      </div>
    )
  }
}

export default Navbar