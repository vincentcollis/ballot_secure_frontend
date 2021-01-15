import React from 'react'
import styled from 'styled-components'

import Day from '../components/Day'

const Layout = styled.div`
    display: flexbox;
    flex-direction: column;
    box-sizing:border-box;
`

function WeekForcast(props){

    // This will be information stored in redux
    const weekInfo = [
        {name:'Monday' , date:'Jan 1st, 2020' , temp:'50' },
        {name:'Tuesday' , date:'Jan 2nd, 2020' , temp:'45' },
        {name:'Wednesday' , date:'Jan 3rd, 2020' , temp:'42' },
        {name:'Thursday' , date:'Jan 4th, 2020' , temp:'51' },
        {name:'Friday' , date:'Jan 5th, 2020' , temp:'48' },
        {name:'Saturday' , date:'Jan 6th, 2020' , temp:'53' },
        {name:'Sunday' , date:'Jan 7th, 2020' , temp:'40' },
    ]

    return(
        <Layout>
            {weekInfo.map((info, i) => <Day key = {i} name = {info.name} date = {info.date} temp = {info.temp}/>)}
        </Layout>
        
    )
}

export default WeekForcast;