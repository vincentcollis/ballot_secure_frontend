import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
    margin: ${props => props.last ? "0":"0 0 2em 0" };
`

function Day(props){
    if (props.position === 6){
        return(
            <Layout last>
                {props.name} <br/>
                {props.date} <br/>
                {props.temp} <br/>
            </Layout>
        )
    } 
    
    return(
        <Layout >
            {props.name} <br/>
            {props.date} <br/>
            {props.temp} <br/>
        </Layout>
    )
}

export default Day;