import React, {useState} from 'react'

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

export default Location;