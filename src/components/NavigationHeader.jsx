import React from 'react'
import { NavLink } from 'react-router-dom'
function NavigationHeader() {
    return (
        <div>
            <nav style={{ display: "flex", gap: 10, justifyContent: 'center' }}>
                <NavLink to='/'>Home</NavLink>
                <NavLink  to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </div>
    )
}

export default NavigationHeader
