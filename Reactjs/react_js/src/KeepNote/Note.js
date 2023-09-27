import { Button } from '@material-ui/core'
import React from 'react'
import Delete from '@material-ui/icons/Delete'
import './style.css'

export default function Note(props) {
    const deleteItems = (id) => {
        props.setlistItems((olditem) => {
            return olditem.filter((arrElem, index) => {
                return index !== id
            })
        })
    };
    return (
        <>
            <div className='note'>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <Button onClick={() => {
                    deleteItems(props.id)
                }}>
                    <Delete className='delete' style={{
                        width: '2.5rem',
                        height: '2.5rem'
                    }} />
                </Button>
            </div>
        </>
    )
}
