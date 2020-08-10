import React, { Fragment, useEffect, useState, useContext } from 'react'
import styled, {css} from 'styled-components';



export const List = styled.div`
    /* border: 1px
        ${props => (props.isDraggingOver ? 'dashed #000' : 'none #ddd')}; */
    /* background: #fff; */
    /* padding: 0.5rem 0.5rem 0; */
    /* border-radius: 3px; */
    /* flex: 0 0 150px; */
    font-family: sans-serif;

`;





export function Container(props) {
  const {
    children,
    innerRef,
    isDraggingOver,
  } = {...props}
  return (<CSScontainer innerRef={innerRef} isDraggingOver={isDraggingOver}>
      <List>
        {children}
      </List>
    </CSScontainer>)
}



export const CSScontainer = styled(List)`
    /* &:hover {
      background: #c5d0db;
    } */
    /* margin: 16px; */
    width: 100%;
    /* border: 1px ${props => (props.isDraggingOver ? 'dashed #000' : 'none #ddd')}; */
`;