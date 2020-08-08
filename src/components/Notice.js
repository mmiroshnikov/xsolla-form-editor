import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components';
import { FormGroup } from 'xsolla-uikit';

export function Notice() {
  return (<CssNotice className="">
    <FormGroup>
      <CssNoticeText>
        Drop items here
      </CssNoticeText>
    </FormGroup>
  </CssNotice>

    )
}


const CssNotice = styled.div`

    border: 1px solid #c5d0db;

`;

const CssNoticeText = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    /* border: 1px solid transparent; */
    line-height: 1.5;
    /* color: #aaa; */
    padding: 24px;
`;