import React, {useState} from 'react'

// import GlobalStyle from './GlobalStyles'
import Layout from './containers/Layout'

import Location from './components/Location'
import TodayForcast from './containers/TodayForcast'
import WeekForcast from './containers/WeekForcast'

import getWeatherData from './api/index'


function App() {

  // set state
  const [zip, setZip] = useState('')
  const [name, setName] = useState('')
  const [description, setdescription] = useState('')
  const [temp, setTemp] = useState('')
  const [feelsLike, setfeelsLike] = useState('')

  // const [state, setstate] = useState(initialState)

  function fetchData(zip){
    getWeatherData(zip)
    console.log('fetch data')
  }

  return (
    <>
      {/* <GlobalStyle/> */}
      <Layout>
        <Location fetchData = {fetchData} zip = {zip} setZip = {setZip}/>
        <TodayForcast/>
        {/* <WeekForcast/> */}
      </Layout>
    </>
  );
}


export default (App);
