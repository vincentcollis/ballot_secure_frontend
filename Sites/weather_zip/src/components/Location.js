import React, {useState} from 'react'

import getWeatherData from '../api/index'

// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
// const URL = `api.openweathermap.org/data/2.5/weather?zip=07666&units=imperial&appid=` + API_KEY 
// api.openweathermap.org/data/2.5/weather?zip=07666&units=imperial&appid=

// const getWeatherData = async () => {
//     try {
//         return await axios.get('http://api.openweathermap.org/data/2.5/weather?zip=07666&units=imperial&appid=e41ca12b5c9ddc5dcce2aca50467fec5')
//     } catch (error) {
//         console.error(error)
//     }
// }

export default function Location (props){
    
    // saving props to constant
    const fetchData = props.fetchData

    // set state
    const [input, setInput] = useState('')

    // controlling form
    function changeHandler(event){
        
        const key = event.target.name
        const value = event.target.value

        switch (key) {
            case 'zipcode':
                setInput(value)
                break;
            default:
                break;
        }
    }

    // fetch data and set state in App.js
    function submitHandler(event){
        event.preventDefault()
        fetchData(input)
    }

    
    return(
        <form onSubmit={submitHandler}>
            <input name = 'zipcode' type='text' onChange = {changeHandler} value ={input} />
        </form>
    )
}


// function mapStateToProps(state){
//     return {
//       currentZip: state.currentZip
//     }
//   }
  
// function mapDispatchToProps(dispatch){
// return {
//     setZip: (userObj) => {
//     dispatch({type: "SET_ZIP", payload: userObj})
//     }
// }
// }