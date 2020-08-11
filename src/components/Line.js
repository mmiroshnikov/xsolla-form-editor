import React, {
  Fragment,
  useEffect,
  useState,
  useContext
} from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { ContentBlock, FormGroup, Button, Icon, Dropdown, ButtonArrow, Select } from 'xsolla-uikit';
import { Edits, Uikit } from '../data/elements';



export function Line(props) {
  const {item, children, handle, isDragging } = { ...props }

  const [state, setState] = useState()

  return (
    <CssItem {...props}>

      <CssLeft className='m-css-left'>
        <Handle {...handle}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
            />
          </svg>
        </Handle>
      </CssLeft>

      <CssRight>
        <Edits
          component={item.componentId}
          state={state}
          setState={setState}/>
        {/* {isDragging && 'isDragging'} */}
        {/* <Button appearance='square' icon='settings'/> */}

          {/* <Select
            options={[
              {label: 'Edit item', description: 'Just then her head struck', value: 'edit'},
              {label: 'Delete item', color: 'red', value: 'delete'}
            ]}
          /> */}



      </CssRight>



      <CSSformGroup>
        {/* <CSShovered isDragging={isDragging}/> */}
        {isDragging && <CSShovered isDragging={isDragging}/>}
        <Uikit
          component={item.componentId}
          state={state}
          setState={setState}

        />
      </CSSformGroup>

    </CssItem>
  )
}


const CSShovered = styled.div `
  border: 1px ${({isDragging}) => (isDragging ? 'dashed #4099ff' : 'none #ddd')};
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: -40px;
  right: auto;
  width: 640px;
  z-index: 2;
  /* border: 1px dashed #4099ff; */
`

const CSShover = styled.div`
  position: absolute;
  top: -20px;
  bottom: -20px;
  left: auto;
  right: auto;
  z-index: 2;
`

const CSSformGroup = styled.div`
  padding: 16px 0;
  position: relative;
`

const CSSbg = styled.div`
  position: absolute;
  z-index: 0;
  top: -20px;
  bottom: -20px;
  left: auto;
  right: auto;
  width: 640px;
  background-color: #fff;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1),
    0 1px 4px 0 rgba(0, 0, 0, 0.08);
`

const CSSbg0 = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`

const CssLeft = styled.div`
  position: absolute;
  margin-left: -120px;
  height: 100%;
  display: flex;
  align-items: center;
`
const CssRight = styled.div`
  /* background: #fafbfc; */
  padding: 8px 0 0 16px;
  position: absolute;
  left: 720px;
  z-index: 2;
  /* left: calc(100% - px); */
  /* right: 0; */
  width: 200px;
  /* height: 100%; */
  /* border: 1px dashed #4099ff; */
`

const CssItem = styled.div`
  position: relative;
  padding: 0 120px;
  /* display: grid; */
  /* grid-template-columns: 80px 1fr 200px; */
  /* grid-column-gap: 24px; */
  & .m-css-left {
    /* display: none; */
    opacity: 0;
    transform: translateX(40px);
    transition: all 50ms ease-in-out;
  }
  &:hover .m-css-left {
    transform: translateX(0px);
    opacity: 1;
  }
  & .m-css-right {
    /* display: none; */
    opacity: 0;
    transform: translateX(-40px);
    transition: all 50ms ease-in-out;
  }
  &:hover .m-css-right {
    transform: translateX(0px);
    display: auto;
    overflow: visible;
    z-index: 3;
    height: auto;
    opacity: 1;
  }
  &:hover {
    z-index: 3;
  }
`

export const Handle = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  user-select: none;
  /* margin: -0.5rem 0.5rem -0.5rem -0.5rem; */
  padding: 0.5rem;

  /* border-radius: 3px 0 0 3px; */
  /* background: #fff; */
  /* border-right: 1px solid #ddd; */
  color: #000;
`
