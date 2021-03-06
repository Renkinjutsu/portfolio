import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className="dropdown">
        <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-bars fa-2x" ></i>
        </button>
        <div className="dropdown-menu">
          <a className='dropdown-item' href='#about'>About Me</a>
          <a className='dropdown-item' href='#proskires'>Projects/Skills</a>
          <a className='dropdown-item' href='#contact'>Contact Me</a>
        </div>
    </div>
    )
  }
}

export default Header