import React, { Fragment } from 'react'

import ReactDOM from 'react-dom';
import { SimpleDragDemo } from './components/SimpleDragDemo';
import { Layout } from './components/Layout';

class App extends React.Component {

  render() {
    return (
      <Fragment>
        <Layout/>
      {/* <SimpleDragDemo/> */}
      </Fragment>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
