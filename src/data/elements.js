import React, { Component, Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import { Input } from 'xsolla-uikit';

import { InputExample } from '../components/Elements/InputExample';
import { ExampleStepTabs } from '../components/Elements/StepTabsExample';
import { PAcharts } from '../components/Elements/Charts';
import NotificationExample  from '../components/Elements/NotificationExample';

export const ITEMS = [
  {
      type: 'pa',
      id: uuid(),
      content: 'Input',
      // component: <PaInput/>
      componentId: 'input',
      edit: <NotificationEdit/>
  },
  {
      type: 'pa',
      id: uuid(),
      content: 'Notification',
      componentId: 'notification',
      edit: <NotificationEdit/>
  },
  {
      type: 'pa',
      id: uuid(),
      content: 'Step tabs',
      componentId: 'step-tabs',
      edit: <NotificationEdit/>
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


export const NotificationEdit = ({state = 'A', setState}) => {
  return (
    <Fragment>
      <select value={state} onChange={(e) => {
        debugger
        setState(e.target.value)
      }}>
        <option value="success">success</option>
        <option value="error">error</option>
        <option value="info">info</option>
      </select>
    </Fragment>
  )
}


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


export const Uikit = ({component = 'input', state}) => {
  return (
    <Fragment>

      {component === 'input' &&
      <div className="">
          <InputExample/>
          </div>
      }

      {component === 'notification' &&
         <NotificationExample status={state}/>
      }

      {component === 'step-tabs' &&
         <ExampleStepTabs/>
      }

      {component === 'charts' &&
         <PAcharts/>
      }

    </Fragment>
  )
}

export const Edits = ({component = 'input', state, setState}) => {
  return (
    <Fragment>

      {component === 'input' &&

          <NotificationEdit state={state} setState={setState}/>

      }


      {component === 'notification' &&
         <NotificationEdit state={state} setState={setState}/>
      }

      {component === 'step-tabs' &&
         <NotificationEdit state={state} setState={setState}/>
      }

      {component === 'charts' &&
         <NotificationEdit state={state} setState={setState}/>
      }

    </Fragment>
  )
}