import React, {useState} from 'react'

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
