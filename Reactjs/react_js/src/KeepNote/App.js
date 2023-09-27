import React, { useState } from 'react'
import CreateNote from './CreateNote'
import Footer from './Footer'
import Header from './Header'
import Note from './Note'
export default function App() {
    const [addItem, setaddItem] = useState([])
    const AddNote = (note) => {
        setaddItem((prevData) => {
            return [...prevData, note]
        });
    }
    return (
        <React.Fragment>
            <Header />
            <CreateNote AddNote={AddNote} />
            {addItem.map((value, index) => {

                return <Note key={index}
                    id={index}
                    title={value.title}
                    content={value.content}
                    setlistItems={setaddItem} />
            })}
            <Footer />

        </React.Fragment>
    )
}
