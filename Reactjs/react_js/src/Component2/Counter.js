// import React, { useState, useEffect } from 'react'
// export default function Counter() {
//     let time = new Date().toLocaleTimeString().toUpperCase();
//     const [count, setcount] = useState(time)
//     var counter = () => {
//         time = new Date().toLocaleTimeString().toUpperCase();
//         setcount(time);
//     }
//     useEffect(() => {
//         setInterval(counter, 1000)
//     }, [count])
//     return (
//         <div>
//             <h2> {count}</h2>
//             <button onClick={counter}>Incr</button>
//         </div>
//     )
// }


import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: new Date().toLocaleTimeString()
        }
        this.Increment = () => {
            setInterval(() => {
                this.setState({
                    count: new Date().toLocaleTimeString()
                })
            }, 1000);
        }
    }
    componentDidMount = () => {
        this.Increment();
    }

    render() {
        return (
            <div className='container ' >
                <h1>{this.state.count}</h1>
                {/* <button onClick={this.Increment}>Increment</button> */}
            </div>
        )
    }
}

