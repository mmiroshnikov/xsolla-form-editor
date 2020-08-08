import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components';

export function Line(props) {
  debugger
  const {children, style} = {...props}
  return (
    <Item {...props}>{children}</Item>
  )
}



const Item = styled.div`
display: flex;
user-select: none;
padding: 0.5rem;
margin: 0 0 0.5rem 0;
align-items: flex-start;
align-content: flex-start;
line-height: 1.5;
border-radius: 3px;
background: #fff;
border: 1px
  ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
`
