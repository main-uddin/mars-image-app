import { hot } from 'react-hot-loader/root'

import React from 'react'
import MarsImage from './MarsImage/MarsImage'

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Mars Image</h1>
        <MarsImage />
      </>
    )
  }
}

export default hot(App)
