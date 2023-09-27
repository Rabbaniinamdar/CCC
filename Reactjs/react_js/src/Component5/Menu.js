import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function Menu() {
    return (
        <div className='nav'>
            <Link className='span' to="/"><span>All</span></Link>
            <Link className='span' to="Home">Home</Link>
            <Link className='span' to="About">About</Link>
            <Link className='span' to="Search">Search</Link>
            <Link className='span' to="Contact">Contact</Link>
            <Link className='span' to="Covid">Covid</Link>
            <Link className='span' to="Home/Name">Name</Link>
        </div>
    )
}
