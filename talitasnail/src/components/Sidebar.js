import React, {useState} from 'react'
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './SideBar.css';
import {IconContext} from 'react-icons';


function Sidebar() {
    const [sidebar, setSideBar] = useState(false)

    const showSideBar =() => setSideBar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color:'fuchsia'}}>
            {/* <div className="sidebar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSideBar}/>
                </Link>    
            </div> */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideBar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index)=>{
                        return(
                            <li key ={index} className={item.cName}>
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
        </>
    );
}

export default Sidebar;