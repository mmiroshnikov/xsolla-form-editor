import React, { Fragment } from 'react'

import ReactDOM from 'react-dom';
// import { SimpleDragDemo } from './components/SimpleDragDemo';
import { Layout } from './components/Layout';
import './editor.css';
import { IntlProvider } from 'react-intl';

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
ReactDOM.render(<IntlProvider locale='en'><App /></IntlProvider>, rootElement)
