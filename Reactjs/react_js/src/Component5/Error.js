import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function Error() {
    return (
        <div>
            <h1>Page not Found</h1>
            <Link to='/' className='span'>Go Back</Link>
        </div>
    )
}
