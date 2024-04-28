import React from 'react'

import "./navbar.css"
import Fire from "../../assets/fire.png"
import Star from "../../assets/glowing-star.png"
import Party from "../../assets/partying-face.png"
import LOGO from '../../assets/logo.svg'

const Navbar = () => {
	return (
		<nav className='navbar'>
			<img src={LOGO} alt="" className='logo' />
			<div className="navbar_links">
				
				<a href="#Popular">Popular <img src={Fire} alt="Fire emoji" className='navbar_emoji' /> </a>
				<a href="#Toprated">Top Rated <img src={Star} alt="star emoji" className='navbar_emoji' /> </a>
				<a href="#upcoming">Upcoming <img src={Party} alt="Fire emoji" className='navbar_emoji' /> </a>
			</div>
		</nav>
	)
}

export default Navbar