import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className='nav-comp'>
            <li>logo</li>                                                             //Add Logo here//
            <li>Home</li>
            <li>Our Story</li>
            <li>Our Project</li>
            <li>News & Events</li>
            <li>Contact Us</li>
            <li><button className="Donate">Donate</button></li>
            <li>
                <div className='search-nav'>
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
                </li>
        </ul>
    </div>
  )
}

export default Navbar