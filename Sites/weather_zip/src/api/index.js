const axios = require('axios');

const getWeatherData = async (arg) => {

    // retrieve data
    const payload = await axios.get('http://api.openweathermap.org/data/2.5/weather?zip=' + arg +'&units=imperial&appid=e41ca12b5c9ddc5dcce2aca50467fec5')
    
    console.log(payload.data)
}
  
export default getWeatherData