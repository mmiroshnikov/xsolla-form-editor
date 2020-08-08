import React, { Fragment } from 'react'
import { Layout } from './components/Layout'
import ReactDOM from 'react-dom';
import { SimpleDragDemo } from './components/SimpleDragDemo';

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
