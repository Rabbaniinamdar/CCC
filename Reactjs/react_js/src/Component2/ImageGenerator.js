import React from 'react'
import '../App.css'
import RefreshIcon from '@material-ui/icons/Refresh';

function ImageGenerator() {
    function refreshPage() {
        window.location.reload(true);
    }
    return (
        <React.Fragment>
            <div className='imggen'>
                <h1>Random Image Generator</h1>
                <p>Click on Refresh to Generator new Images<p className='refresh' onClick={refreshPage}> <RefreshIcon fontSize="large" color="primary" /></p></p>
            </div>

            <img src='https://picsum.photos/300/301' alt='logo' />
            <img src='https://picsum.photos/300/302' alt='logo' />
            <img src='https://picsum.photos/300/303' alt='logo' />
            <img src='https://picsum.photos/300/304' alt='logo' />
            <img src='https://picsum.photos/300/305' alt='logo' />
            <img src='https://picsum.photos/300/306' alt='logo' />
            <img src='https://picsum.photos/300/307' alt='logo' />
            <img src='https://picsum.photos/300/308' alt='logo' />
            <img src='https://picsum.photos/300/309' alt='logo' />
            <img src='https://picsum.photos/300/310' alt='logo' />
            <img src='https://picsum.photos/300/311' alt='logo' />
            <img src='https://picsum.photos/300/312' alt='logo' />
            <img src='https://picsum.photos/300/313' alt='logo' />
            <img src='https://picsum.photos/300/315' alt='logo' />
            <img src='https://picsum.photos/300/317 ' alt='logo' />
        </React.Fragment>
    )
};
export default ImageGenerator;
