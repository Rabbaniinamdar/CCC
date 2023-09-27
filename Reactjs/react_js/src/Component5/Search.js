import React, { useState } from 'react'
export default function Search() {
    const [data, setdata] = useState("")
    const eventhadler = (event) => {
        setdata(event.target.value);
    }
    const img = `https://source.unsplash.com/400x400/?${data}`
    return (
        <div>
            <h1>Search</h1>
            <input type="text" onChange={eventhadler} value={data} /><br />
            <h3>{data}</h3>
            {data === "" ? null : <img src={img} alt="Img" />}
        </div>
    )
}
