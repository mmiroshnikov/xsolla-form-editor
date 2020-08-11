import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components';
import { FormGroup } from 'xsolla-uikit';

export function Page({
  type='popup',
  size='md',
  children,
}) {
  return (
    <FormGroup indentation='lg'>
      <CSSbg0>

        <CSScont>
          {children}
        </CSScont>

        <CSSbg/>
      </CSSbg0>
    </FormGroup>
  )
}



const CSSbg0 = styled.div`
  overflow: hidden;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`

const CSSbg = styled.div`
  position: absolute;
  z-index:0;
  /* top: -20px; */
  /* bottom: -20px; */
  top: 20px;
  bottom: 20px;
  left: 80px;
  right: auto;
  width: 640px;
  background-color: #fff;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,.1), 0 1px 4px 0 rgba(0,0,0,.08);
  border-radius: 8px;
`
const CSScont = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 44px 0 44px 0;
`