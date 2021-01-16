const defaultState = {
    currentZip:{}
}

function reducer(state = defaultState, action){
    switch(action.type){
        case "SET_ZIP":
            return{
                ...state,
                currentZip: action.payload
            }
            defaultState: return state
    }
}

export default reducer

// example of retrieved data

// {
//     "coord": {
//       "lon": -74.0119,
//       "lat": 40.8915
//     },
//     "weather": [
//       {
//         "id": 501,
//         "main": "Rain",
//         "description": "moderate rain",
//         "icon": "10n"
//       }
//     ],
//     "base": "stations",
//     "main": {
//       "temp": 42.69,
//       "feels_like": 34.79,
//       "temp_min": 39.99,
//       "temp_max": 46.4,
//       "pressure": 1007,
//       "humidity": 93
//     },
//     "visibility": 10000,
//     "wind": {
//       "speed": 10.36,
//       "deg": 70
//     },
//     "rain": {
//       "1h": 3.38
//     },
//     "clouds": {
//       "all": 90
//     },
//     "dt": 1610773907,
//     "sys": {
//       "type": 1,
//       "id": 6015,
//       "country": "US",
//       "sunrise": 1610799467,
//       "sunset": 1610834016
//     },
//     "timezone": -18000,
//     "id": 0,
//     "name": "Teaneck",
//     "cod": 200
//   }