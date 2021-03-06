import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideBarData } from './SidebarData'
import './NavBar.css'
import { IconContext } from 'react-icons'

function NavBar() {
	const [sidebar, setSideBar] = useState(false)

	const showSidebar = () => setSideBar(!sidebar)
	return (

		<div className="navbar">
			<IconContext.Provider value={{color: 'gold'}}>
			<Link>
				<FaIcons.FaBars onClick={showSidebar}/>
			</Link>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className='nav-menu-items' onClick={showSidebar}>
					<li className="navbar-toggle">
						<Link to='#' className='menu-bars'>
							<AiIcons.AiOutlineClose />
						</Link>
					</li>
					{SideBarData.map((item, index) => {
						return (
							<li key={index} className={item.className}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
			</IconContext.Provider>
		</div>

	)
}

export default NavBar;
