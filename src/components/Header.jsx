import React from 'react'

function Header(props) {
    console.log(props)
    return (
        <header>
            <h1>{props.myName}</h1>
            <nav style={{ display: "flex", gap: 10, justifyContent: 'center' }}>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
            </nav>
        </header>
    )
}

export default Header
