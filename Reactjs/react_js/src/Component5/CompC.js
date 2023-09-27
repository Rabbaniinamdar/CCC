import React, { useContext, useState, useEffect } from 'react'
import { Name } from './CompA.js'
function CompC() {
    const [click, setclick] = useState(0)
    document.title = `You click Me ${click} times`
    const name = useContext(Name);
    useEffect(() => {
        document.title = `You click Me ${click} times`
    }, [click])

    return (
        <div>
            <button onClick={() => {
                setclick(click + 1)
            }}>Click Me {click}</button>
        </div>
    )
}
export default CompC;
