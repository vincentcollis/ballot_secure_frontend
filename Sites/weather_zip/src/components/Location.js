import React, {useState} from 'react'

const Location = (props) => {
    // set state
    const [zip, setZip] = useState('')
    
    
    const changeHandler = (event) =>{
        event.preventDefault()

        const key = event.target.id
        const value = event.target.value

        switch (key) {
            case 'zipcode':
                setZip(value)
                break;
        
            default:
                break;
        }
    }

    const enterHandler = (event) => {
        event.preventDefault()

        if(event.key === 'Enter'){
            // Send fetch request
            console.log("Send fetch request")

            // Store fetched data into redux
        }

    }

    
    return(
        <form >
            <input id='zipcode' type='text' onChange = {changeHandler} onKeyPress = {enterHandler} />
        </form>
    )
}

export default Location;