import weatherAPI from '../api/weatherapi'

// Get All weather data
export const fetchData = () => {

    return async (dispatch) => {
        const response = await weatherAPI.get()
    }
}