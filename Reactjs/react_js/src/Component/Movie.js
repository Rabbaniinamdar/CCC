import React from 'react'
import Card from './Card'
import api from './Api'
import NavBar from './NavBar.js'
export default function API() {                    
    return (
        <div>
        <NavBar/>
            {api.map((element) => {
                return <Card key={element.id} genre={element.genre[0]} rating={element.rating} title={element.title} description={element.description} trailer={element.trailer} thumbnail={element.thumbnail} />
            })}
        </div>
    )
}
