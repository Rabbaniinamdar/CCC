import React, { useState } from 'react'
import Delete from './Delete'

export default function Data(props) {
    return (
        <div>
            {props.listItems.map((retrive, index) => {

                return (
                    <React.Fragment>
                        {props.handlrcallback(index)}
                        {/* <li style={{ textDecoration: "line" ? "line-through" : "none" }} key={index}><Remove id={index} setlistItems={props.setlistItems} /> {retrive}</li> */}
                        <Delete text={retrive} />
                    </React.Fragment>
                )
            })}
        </div>
    )
}
