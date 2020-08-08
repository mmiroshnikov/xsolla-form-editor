import React, { Component, Fragment } from 'react';
import uuid from 'uuid/v4';
import { Input } from 'xsolla-uikit';
export const ITEMS = [
  {
      id: uuid(),
      content: 'Input',
      // component: <PaInput/>
      componentId: 'input'
  },
  // {
  //     id: uuid(),
  //     content: 'Copy'
  // },
  // {
  //     id: uuid(),
  //     content: 'Image'
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
    <Fragment>{component === 'input' &&
          <Input
            name="basic-input"
            input={{
              value: 'Input',
              onChange: ()=> void(0)
            }}
          />
      }

    </Fragment>
  )
}