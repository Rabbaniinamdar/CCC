import React, { createContext } from 'react'
import CompB from './CompB'
const Name = createContext()
export default function CompA() {
    return (
        <div>
            <Name.Provider value={"rabbani inamadr"}>
                <CompB />
            </Name.Provider>
        </div>
    )
}
export {Name};

