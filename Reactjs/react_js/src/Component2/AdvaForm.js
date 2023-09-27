import React, { useState } from 'react'

export default function AdvaForm() {
    const [name, setname] = useState({
        fname: "",
        lname: "",
        email: "",
        tel: ""
    })
    const eventhadler = (event) => {
        const { value, name } = event.target
        setname((pv) => {
            return {
                ...pv,
                [name]: value
            }
            // if (name === "fname") {
            //     return {
            //         fname: value,
            //         lname: pv.lname,
            //         email: pv.email,
            //         tel: pv.tel
            //     }
            // }
            // else if (name === "lname") {
            //     return {
            //         fname: pv.fname,
            //         lname: value,
            //         email: pv.email,
            //         tel: pv.tel
            //     }
            // }
            // else if (name === "email") {
            //     return {
            //         fname: pv.fname,
            //         lname: pv.lname,
            //         email: value,
            //         tel: pv.tel
            //     }
            // }
            // else if (name === "tel") {
            //     return {
            //         fname: pv.fname,
            //         lname: pv.lname,
            //         email: pv.email,
            //         tel: value
            //     }
            // }
        });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        alert("Date Saved")

    }
    return (
        <div>
            <form>
                <h3>
                    {name.fname} {name.lname}
                </h3>
                <p>
                    {name.email}
                </p>
                <p>{name.tel}</p>
                <input type="text" onChange={eventhadler} name='fname' value={name.fname} placeholder="Enter First Name" /><br />
                <input type="text" onChange={eventhadler} name='lname' value={name.lname} placeholder="Enter Last Name" /><br />
                <input type="email" onChange={eventhadler} name='email' value={name.email} placeholder="Enter Email" /><br />
                <input type="tel" onChange={eventhadler} name='tel' value={name.tel} placeholder="Enter Phone Number" /><br />
                <button onClick={onSubmit}>Submit👍</button>
            </form>
        </div>
    )
}
