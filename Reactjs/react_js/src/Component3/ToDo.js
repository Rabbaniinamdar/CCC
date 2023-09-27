import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import React, { useState } from 'react'
import Data from './Data';
import './style.css'


export default function ToDo() {

    const [item, setitem] = useState(" ")
    const [listItems, setlistItems] = useState([])
    const textShow = (event) => {
        setitem(event.target.value)
    };

    const listofItems = (e) => {
        if (item !== " ") {
            setlistItems((olditem) => {
                return [...olditem, item];
            })
            setitem(" ");
        }
        else {
            alert("List is Empty")
        }
    };
    let callBack=(Keys)=>{
        return Keys 
    }
    return (
        <React.Fragment>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1>ToDO List</h1>
                    <br />
                    <input type='text' placeholder="Add a Items" onChange={textShow} value={item} />
                    <button key={callBack} onClick={listofItems} className="btn btn-warning" ><AddIcon /></button>
                    <ul>
                        <Data handlrcallback={callBack} key={callBack} listItems={listItems} setlistItems={setlistItems} />
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}
