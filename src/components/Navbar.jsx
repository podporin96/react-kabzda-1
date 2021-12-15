import React from 'react';
import s from './Navbar.module.css';
// let s = {
//     'nav':'Navbar_nav__3GJI7',
//     'item':'Navbar_item__1bs08'
// }
console.log(s);
const Navbar = () => {
    return <nav className={s.nav}>
                <div className={`${s.item} ${s.active}`}><a>Profile</a></div>
                <div className={s.item}><a>Messages</a></div>
                <div className={s.item}><a>News</a></div>
                <div className={s.item}><a>Music</a></div>
                <div className={s.item}><a>Settings</a></div>
            </nav>
}

export default Navbar;