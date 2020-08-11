import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components';
import { FormGroup } from 'xsolla-uikit';

export function Notice() {
  return (


      <CssNotice className="">
          <CssNoticeText>
            Drop items here
          </CssNoticeText>
      </CssNotice>


    )
}


const CssNotice = styled.div`
    position: relative;
    width: 640px;
    left: 80px;
    /* border: 1px solid #c5d0db; */

`;

const CssNoticeText = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    /* border: 1px solid transparent; */
    /* color: #aaa; */
    padding: 24px;
    font-size: 14px;
    text-transform: uppercase;
`;


const CSSbg0 = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-content: center;
`
