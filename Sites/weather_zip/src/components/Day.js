import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
    /* display: flexbox; */
    box-sizing:border-box;
`

function Day(props){


    return(
        <Layout>
            {props.name} <br/>
            {props.date} <br/>
            {props.temp} <br/>
        </Layout>
        
    )
}

export default Day;