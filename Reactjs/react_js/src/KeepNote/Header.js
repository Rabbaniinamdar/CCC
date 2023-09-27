import React from 'react'
import logo from './logo.png'
import './style.css'
export default function Header() {
    return (
        <React.Fragment>
            <div className='header'>
                <img src={logo} alt='logo' width='100' height='80' />
                {/* <h1 className='heading'>Notes</h1> */}
            </div>
        </React.Fragment>
    )
}
