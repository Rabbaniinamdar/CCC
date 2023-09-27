import React,{useState} from 'react'

export default function CompD() {
    const [num, setnum] = useState()
    return (
        <div>
        <h4>{num}</h4>
            <select value={num} onChange={(e) => {
                setnum(e.target.value)
            }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}
