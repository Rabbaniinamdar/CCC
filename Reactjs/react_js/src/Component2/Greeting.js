import './Greet.css'
import { useEffect, useState } from 'react'

function Greeting() {
    var sty = {
        color:"red"
    }
    const [, setCount] = useState(0);
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    var sec = new Date().getSeconds();
    useEffect(() => {
        setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
    }, []);
    const time = hours + "." + minutes;
    var Greet;
    if (time >= 5.00 && time <= 11.59) {
        Greet = "Good Morning"
        sty.color = "Green"
    }
    if (time >= 12.00 && time <= 16.59) {
        Greet = "Good Afternoon"
        sty.color = "Red"

    }
    if (time >= 17 && time <= 18.59) {
        Greet = "Good Evening"
        sty.color = "Black"

    }
    if (time >= 19.59 && time <= 24.00) {
        Greet = "Good Night"
    }

    return (
        <div className='greeting'>
            <p>Time- {hours}:{minutes}:{sec}</p>
            <h1 className='greet' >Hello Bro, <span style={sty}>{Greet}</span></h1>
        </div>
    )
}
export default Greeting;