import React from 'react'
import Greeting from './Greeting'
import ImageGenerator from './ImageGenerator'
export default function Ifelse(props) {
    let isLoggedIn = false;
    return (
        <div>
            {isLoggedIn
                ? <Greeting />
                : <ImageGenerator />
            }
        </div>
    )
}
