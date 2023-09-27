import React from 'react'

SlotM = (props) => {
    let { a, b, c } = props
    if (a === b && b === c) {
        return (
            <>
                <h1>{a} {b} {c}</h1>
                <h1>Matching.</h1>
            </>
        )
    }
    else {
        return (
            <>
                <h1>{a} {b} {c}</h1>
                <h1>Not Matching.</h1>
            </>
        )
    }
}
export default SlotM