const searchReducer = (search='', action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return action.payload
        default:
            return search
    }
}

export default searchReducer