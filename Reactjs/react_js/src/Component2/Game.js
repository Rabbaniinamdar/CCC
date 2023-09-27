import React from 'react'

export default function Game() {
    let SlotM = (props) => {
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
                    <h1>  </h1>
                </>
            )
        }
    }
    return (
        <div>
            <SlotM a="A" b="A" c="A" />
            <SlotM a="A" b="B" c="A" />
            <SlotM a="A" b="A" c="A" />
        </div>
    )
}
