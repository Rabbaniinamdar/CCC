import React, { useState } from 'react'

export default function MyAccodian(props) {
    const [show, setshow] = useState(false)
    return (
        <div>
            {props.passdata("Hello")}
            <h3> <span onClick={() => {
                setshow(!show)
            }}>{show ? "➖" : "➕"}</span>{props.quetions}</h3>
            {show && <p>{props.ans}</p>}
        </div>
    )
}
