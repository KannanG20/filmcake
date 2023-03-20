import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { RiMenu3Line } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const Links = [
        {
            "id" : 1,
            "name" : "now_playing",
        },
        {
            "id" : 2,
            "name" : "top_rated",
        },
        {
            "id" : 3,
            "name" : "upcoming",
        },
    ];

  return (
    <div className='navbar_container'>
        <div><Link className='logo' to='/' style={{textDecoration : 'none', color : "white"}}>FilmCake</Link></div>
        <div>
        <ul className= {`${!open ? 'nav_items' : 'nav_responsive'}`}>
            {Links.map((link)=>(
                <Link key={link.id} to={`/${link.name}`} className="nav_links" onClick={()=> {open && setOpen(()=> !open)}}>
                    <li>{link.name}</li></Link>
            ))}
        </ul>
        </div>
        <div className='menubar'>
        {!open ?
        <RiMenu3Line onClick={()=> setOpen(()=> !open)}/>
        :
        <RxCross2 onClick={()=> setOpen(()=> !open)}/>
        }
        </div>
    </div>
  )
}

export default Navbar