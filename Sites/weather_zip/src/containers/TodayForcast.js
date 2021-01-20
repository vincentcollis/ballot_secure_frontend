import React from 'react'

export default function TodayForcast(props) {
    let {feelsLike, temp, description} = props

    console.log(temp)
    return (
        <div>
            {description}<br/>
            Current Temperture:  {temp}<br/>
            Feels Like: {feelsLike}<br/>
        </div>
    )
}
