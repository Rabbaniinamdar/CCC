import React, { useState, useEffect } from 'react'
import axios from "axios";
import './style.css'
export default function Covid() {
    const [datas, setdata] = useState([])
    const updatedData = () => {
        // const res = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
        // const result = await res.json();
        // setdata(result.data.regional);
        // console.log(result.data.regional)
        axios.get("https://api.rootnet.in/covid19-in/stats/latest")
            .then((response) => {
                setdata(response.data.data.regional);
                console.log(response.data.data.regional)
            });
    }
    useEffect(() => {
        updatedData();
    }, [])

    return (
        <div>
            <div className='head'>
                <h1>INDIAN COVID-19 DASHBOARD</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>STATE</th>
                        <th>CONFIRMED</th>
                        <th>RECOVERD</th>
                        <th>DEATHS</th>
                        <th>ACTIVE</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((value, index) => {
                        const active = (value.confirmedCasesIndian - value.discharged - value.deaths);
                        return (
                            <tr key={index} className="loc">
                                <td style={{ backgroundColor: 'lightskyblue' }} >{value.loc}</td>
                                <td style={{ backgroundColor: "orange" }}>{value.confirmedCasesIndian}</td>
                                <td style={{ backgroundColor: "lightgreen" }}>{value.discharged}</td>
                                <td style={{ backgroundColor: 'red' }}>{value.deaths}</td>
                                <td style={{ backgroundColor: 'lightseagreen' }}>{active}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

        </div>
    )
}
