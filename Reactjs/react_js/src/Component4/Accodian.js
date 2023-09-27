import React, { useState } from 'react'
import { quetions } from './Api.js'
import MyAccodian from './MyAccodian.js'
export default function Accodian(props) {
    const [data, setdata] = useState(quetions)
    let passdata = (data) => {
        return data
    }
    return (
        <div>                       
            {data.map((curr) => {
                return <MyAccodian passdata={passdata} key={curr.id} quetions={curr.quetion} ans={curr.answer} />
            })}
        </div>
    )
}
