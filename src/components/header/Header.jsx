import React from 'react';
import logo from '../../assets/logo.svg';
import logout from '../../assets/logout.svg';
import './Header.css'

function Header({auth, user}) {
  return (
    <header>
        <img src={logo} alt="" />
        {user && <img className="logout" onClick={() => auth.signOut()} src={logout} alt="" />}
    </header>
  )
}

export default Header
