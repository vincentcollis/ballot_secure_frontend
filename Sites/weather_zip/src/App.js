import React from 'react'

import GlobalStyle from './GlobalStyles'
import Layout from './containers/Layout'

import Location from './components/Location'

function App() {
  return (
    <>
      {/* <GlobalStyle/> */}
      <Layout>
        <Location/>
      </Layout>
    </>
  );
}

export default App;
