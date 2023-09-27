import React from 'react'
import  { add, mul, div, sub } from './Calculator1.js'

function Calculator2( ) {
    return (
        <div>
            <p contentEditable="true">Addition-{add(2, 2)}</p>
            <p>Substraction-{sub(2, 2)}</p>
            <p>Multiplication-{mul(2, 2)}</p>
            <p>Division-{div(2, 2)}</p>
        </div>
    )
};
export default Calculator2;