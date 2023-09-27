import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
export default function CreateNote(props) {
    const [expand, setexpand] = useState(false)
    const [val, setval] = useState(" ")
    const [note, setnote] = useState({
        title: "",
        content: ""
    })
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setval(value)

        setnote((prevDate) => {
            return {
                ...prevDate,
                [name]: value
            }
        })
    }

    const AddEvent = () => {
        if (val !== " " && val.charAt(0) !== " ") {
            props.AddNote(note);
            console.log(val.charAt(0))
        }
        else {
            alert("Please Write Some Note")
        }
        setnote({
            title: "",
            content: ""
        })
        setval("")

    }
    const expandIt = () => {
        setexpand(true)
    }
    return (
        <>
            <div className='main_note'>
                <form>
                    {expand ? <input type='text' placeholder='Title' name='title' value={note.title}
                        onChange={InputEvent} autoComplete='off' /> : null}<br />
                    <textarea rows=" " column="" name='content' value={note.content}
                        onClick={expandIt} onChange={InputEvent} placeholder='Write a note' />
                    {expand ? <Button onClick={AddEvent}>
                        <AddIcon className='plus_sign' style={{
                            width: '3rem',
                            height: '3rem'
                        }} />
                    </Button> : null}
                </form>

            </div>
        </>
    )
}
