import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components';
import { Handle } from './Layout';
import { ContentBlock, FormGroup } from 'xsolla-uikit';

export function Line(props) {
  debugger
  const {children, handle} = {...props}
  return (
    <FormGroup indentation='xs'>
    <Item {...props}>

      <Handle
          {...handle}>
          <svg
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path
                  fill="currentColor"
                  d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
              />
          </svg>
      </Handle>
      {children}</Item>
      </FormGroup>
  )
}



const Item = styled.div`
display: flex;
/* user-select: none; */
/* padding: 0.5rem; */
align-items: flex-start;
align-content: flex-start;
/* line-height: 1.5; */
/* border-radius: 3px; */

border: 1px
  ${props => (props.isDragging ? 'dashed #4099ff' : 'none #ddd')};
`
