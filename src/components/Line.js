import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components';

import { ContentBlock, FormGroup } from 'xsolla-uikit';

export function Line(props) {
  debugger
  const {children, handle} = {...props}
  return (
<FormGroup>
    <CssItem {...props}>
<CssLeft>
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
      </CssLeft>


      <CssRight>
        Hints
      </CssRight>

      <FormGroup>
        {children}
      </FormGroup>




      </CssItem>
      </FormGroup>
  )
}

const CssLeft = styled.div`
position: absolute;
margin-left: -90px;

`
const CssRight = styled.div`
  /* background: #fafbfc; */
  padding: 8px 0 0 16px;
  position: absolute;
  left: calc(100% - 80px);
  right: 0;
`

const CssItem = styled.div`
display:relative;
padding: 0 120px;
/* display: grid; */
/* grid-template-columns: 80px 1fr 200px; */
/* grid-column-gap: 24px; */

border: 1px
  ${props => (props.isDragging ? 'dashed #4099ff' : 'none #ddd')};
`


export const Handle = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    user-select: none;
    /* margin: -0.5rem 0.5rem -0.5rem -0.5rem; */
    padding: 0.5rem;

    /* border-radius: 3px 0 0 3px; */
    background: #fff;
    /* border-right: 1px solid #ddd; */
    color: #000;
`;
