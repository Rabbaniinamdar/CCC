import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Delete'

export default function Delete(props) {
    const [line, setline] = useState(false)
    const cuttext = () => {
        setline(true)
    }
    return (
        <div>
            <span>
                <Button onClick={cuttext} color="secondary" variant='contained'><AddIcon /></Button>
            </span>
            <span style={{ textDecoration: line ? "line-through" : "none" }}> {props.text}</span>
        </div>
    )
}
