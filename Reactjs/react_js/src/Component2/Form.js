import React, { useState } from 'react'

export default function Form() {
    const [name, setname] = useState("")
    const [lname, setlname] = useState("")
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const eventhadler = (event) => {
        setfirstName(event.target.value);
    }
    const eventhadler1 = (event) => {
        setlastName(event.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setname(firstName);
        setlname(lastName);
    }
    return (
        <div>
            <form onClick={onSubmit}>
                {name} {lname}<br/>
                <input type="text" onChange={eventhadler} value={firstName} /><br />
                <input type="text" onChange={eventhadler1} value={lastName} /><br />
                <button>Submit👍</button>
            </form>
        </div>
    )
}
