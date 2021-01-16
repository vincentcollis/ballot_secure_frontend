import React, {useState} from 'react'

import { connect } from 'react-redux'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const URL = `api.openweathermap.org/data/2.5/weather?zip=07666&units=imperial&appid=` + API_KEY 


const Location = (props) => {
    // set state
    const [zip, setZip] = useState('')
    
    
    function changeHandler(event){
        
        const key = event.target.name
        const value = event.target.value

        console.log(value)
        switch (key) {
            case 'zipcode':
                setZip(value)
                break;
            default:
                break;
        }
    }

    function submitHandler(event){
        event.preventDefault()
        console.log("Send fetch request")    
        //     // Using open weather app
        //     // Store fetched data into redux
        // }

    }

    // console.log(zip)
    return(
        <form onSubmit={submitHandler}>
            <input name = 'zipcode' type='text' onChange = {changeHandler} value ={zip} />
        </form>
    )
}


function mapStateToProps(state){
    return {
      currentZip: state.currentZip
    }
  }
  
function mapDispatchToProps(dispatch){
return {
    setZip: (userObj) => {
    dispatch({type: "SET_ZIP", payload: userObj})
    }
}
}

export default connect()(Location);