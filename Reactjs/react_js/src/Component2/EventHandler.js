import React, { useState } from 'react'
export default function EventHandler() {
    const [color, setcolor] = useState("red")
    const changeColor = () => {
        //     if (color === "blue") {
        setcolor("blue")
        //     }
        //     else {
        //         setcolor("blue")
        //     }
    }
    return (
        <React.Fragment>
            <div style={{ backgroundColor: color }}>
                <button onMouseOver={changeColor}>Click</button>
            </div>
        </React.Fragment>
    )
}
