import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'


export default function ALL(props) {
    return (
        <>
            <Home />
            <About />
            <Contact />
            <p>{props.name}</p>
        </>
    )
}

