import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components';
import { Handle } from './Layout';
import { ContentBlock } from 'xsolla-uikit';

export function Element(props) {
  const {children, style,} = {...props}
  return (

    <Item {...props}>
      {/* <CSSdropZone className='hovered'/> */}
        {children}
    </Item>

  )
}

const CSSdropZone = styled.div`
  display: none;
  border: 1px dashed #4099ff;
  top: 20px;
  bottom: 20px;
  left: 80px;
  right: auto;
  width: 640px;
  background-color: #fff;
  border-radius: 8px;
`


const Item = styled.div`
  /* color: red; */
  display: flex;
  user-select: none;
  padding: 0.5rem;
  margin: 0 0 0.5rem 0;
  align-items: flex-start;
  align-content: flex-start;
  border-radius: 3px;
  background: #fff;
  &:hover .hovered {
    display: block;
  }
  /* border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')}; */

`
