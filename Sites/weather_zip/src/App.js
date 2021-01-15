import React from 'react'

// import GlobalStyle from './GlobalStyles'
import Layout from './containers/Layout'

import Location from './components/Location'
import WeekForcast from './containers/WeekForcast'


function App() {
  return (
    <>
      {/* <GlobalStyle/> */}
      <Layout>
        <Location/>
        <WeekForcast/>
      </Layout>
    </>
  );
}

export default App;
