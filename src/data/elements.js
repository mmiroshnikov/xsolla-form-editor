import React, { Component, Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import { Input, FormGroup, Button, Checkbox } from 'xsolla-uikit';

import { InputExample } from '../components/Elements/InputExample';
import { ExampleStepTabs } from '../components/Elements/StepTabsExample';
import { PAcharts } from '../components/Elements/Charts';
import NotificationExample  from '../components/Elements/NotificationExample';
import styled, {css} from 'styled-components';

export const ITEMS = [
  {
      type: 'pa',
      id: uuid(),
      content: 'Input',
      // component: <PaInput/>
      componentId: 'input',
      edit: ()=> <NotificationEdit/>
  },
  {
      type: 'pa',
      id: uuid(),
      content: 'Notification',
      componentId: 'notification',
      edit: ()=><NotificationEdit/>
  },
  {
      type: 'pa',
      id: uuid(),
      content: 'Step tabs',
      componentId: 'step-tabs',
      edit: ()=><NotificationEdit/>
  },
  // {
  //     type: 'analytics',
  //     id: uuid(),
  //     content: 'Pie',
  //     // componentId: 'pie'
  // },
  // {
  //     type: 'analytics',
  //     id: uuid(),
  //     content: 'Column',
  //     // componentId: 'charts'
  // },
  // {
  //     id: uuid(),
  //     content: 'Slideshow'
  // },
  // {
  //     id: uuid(),
  //     content: 'Quote'
  // }
];




export const PaInput = () => {
  return (
    <Fragment>
      <Input
        name="basic-input"
        input={{
          value: 'Input',
          onChange: ()=> void(0)
        }}
      />
    </Fragment>
  )
}


export const Uikit = ({component = 'input', state, setState}) => {
  return (
    <Fragment>

      {component === 'input' && <InputExample state={state} setState={setState}/>}

      {component === 'notification' && <NotificationExample state={state} setState={setState}/>
      }

      {component === 'step-tabs' && <ExampleStepTabs state={state} setState={setState}/>
      }

      {component === 'charts' && <PAcharts/>}

    </Fragment>
  )
}

export const Edits = ({component = 'input', state, setState}) => {
  return (


    <CSSright0 className='m-css-right'>
      <CSSright>
        <FormGroup border='sm'>
        {component === 'input' &&
            <InputEdit state={state} setState={setState}/>
        }


        {component === 'notification' &&
          <NotificationEdit state={state} setState={setState}/>
        }

        {component === 'step-tabs' &&
          <StepTabsEdit state={state} setState={setState}/>
        }

        {component === 'charts' &&
          <NotificationEdit state={state} setState={setState}/>
        }
        </FormGroup>

        <div style={{display: 'flex'}}>
          <div className="xsui-form-group__label" style={{paddingRight:16}}>
            <Button appearance='flatten'>Duplicate</Button>
          </div>
          <Button appearance='flatten'>Delete</Button>
        </div>

      </CSSright>
    </CSSright0>


  )
}


const CSSright0 = styled.div`
  color: ${({theme}) => theme['colorAccent']};
  height: 100%;
  position: relative;
  overflow: hidden;
  z-index:0;
`
const CSSright = styled.div`
  border: 1px solid #c5d0db;
  border-radius: 8px;
  padding: 16px;
  background: #f7faff;
`



export const NotificationEdit = ({state = 'success', setState}) => {
  return (
    <Fragment>
      <FormGroup label='Status'>
        <select value={state} onChange={(e) => {
          debugger
          setState(e.target.value)
        }}>
          <option value="success">success</option>
          <option value="error">error</option>
          <option value="info">info</option>
        </select>
      </FormGroup>
    </Fragment>
  )
}


export const StepTabsEdit = ({state = {current: 1, total: 4}, setState}) => {
  return (
    <Fragment>

      <FormGroup indentation='sm'>
        <div style={{display: 'flex'}}>
          <div className="xsui-form-group__label" style={{paddingRight:8}}>
            Steps number
          </div>
          <select value={state['total']} onChange={(e) => {
            setState({...state, total: parseInt(e.target.value)})
          }}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
      </FormGroup>


      <FormGroup indentation='sm'>
        <div style={{display: 'flex'}}>
          <div className="xsui-form-group__label" style={{paddingRight:8}}>
            Current step
          </div>
          <select value={state['current']} onChange={(e) => {
            setState({...state, current: parseInt(e.target.value)})
          }}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>
      </FormGroup>





    </Fragment>
  )
}

export const InputEdit = ({state = {
  label: 'Label text',
  tooltip: 'Tooltip text',
  caption: 'Caption text',
  size: 'sm',
}, setState}) => {
  return (
    <Fragment>
      <FormGroup label='Input size'>
      <select value={state['size']} onChange={(e) => {
        setState({...state, size: e.target.value})
      }}>
        <option value={'sm'}>Small</option>
        <option value={'md'}>Medium</option>
      </select>
      </FormGroup>

      <FormGroup size='xs'>


<FormGroup label='Label'>
          <input
            value={state['label']}
            onChange={(e)=> setState({...state, label: e.target.value})}
          />
</FormGroup>
<FormGroup label='Value'>
          <input
            value={state['value']}
            onChange={(e)=> setState({...state, value: e.target.value})}
          />
</FormGroup>
<FormGroup label='Tooltip'>
          <input
            value={state['tooltip']}
            onChange={(e)=> setState({...state, tooltip: e.target.value})}
          />
</FormGroup>
<FormGroup label='Caption'>
          <input
            value={state['caption']}
            onChange={(e)=> setState({...state, caption: e.target.value})}
          />
</FormGroup>
        {/* <div style={{display: 'flex'}}>
            <Checkbox
                    name="checkbox_label"
                    label="Label"
                    input={{
                      value: state['label'],
                      onChange: ()=> setState({...state, label: !state['label']}),
                    }}
                  />

            <Checkbox
                    name="checkbox_tooltip"
                    label="Tooltip"
                    input={{
                      value: state['tooltip'],
                      onChange: ()=> setState({...state, tooltip: !state['tooltip']}),
                    }}
                  />
            </div> */}
      </FormGroup>

    </Fragment>
  )
}