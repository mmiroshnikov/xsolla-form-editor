import React, { Component, Fragment } from 'react';
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
      componentId: 'input'
  },
  {
      type: 'pa',
      id: uuid(),
      content: 'Notification',
      componentId: 'notification',
  },
  {
      type: 'pa',
      id: uuid(),
      content: 'Step tabs',
      componentId: 'step-tabs'
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


export const Uikit = ({component = 'input'}) => {
  return (
    <Fragment>

      {component === 'input' &&
      <div className="">
          <InputExample/>
          </div>
      }


      {component === 'notification' &&
         <NotificationExample/>
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