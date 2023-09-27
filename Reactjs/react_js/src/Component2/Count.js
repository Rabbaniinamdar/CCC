import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import SubIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import { Tooltip } from '@material-ui/core'
export default function Count() {
    const [incr, setincr] = useState(0)
    const incrementNo = () => {
        setincr(incr + 1)
    }
    const dicrementNo = () => {
        if (incr > 0) {
            setincr(incr - 1)
        }
        else {
            alert("Zero Limited Reached")
        }
    }
    return (
        <div>
            <p>{incr}</p>
            <Tooltip title="Add">
                <Button onClick={incrementNo}><AddIcon /></Button>
            </Tooltip>
            <Tooltip title="Delete">
                <Button onClick={dicrementNo}><SubIcon /></Button>
            </Tooltip>
        </div>
    )
}
