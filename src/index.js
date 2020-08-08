import React from 'react'
import ReactDOM from 'react-dom'
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'

import initialData from './initial-data'
import Column from './components/Column'
import { Layout } from './components/Layout'

const Container = styled.div`
  /* display:flex; */
`

class App extends React.Component {

  render() {
    return (
      <Layout/>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
