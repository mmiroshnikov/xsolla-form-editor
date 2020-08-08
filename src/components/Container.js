import React, { Fragment, useEffect, useState, useContext } from 'react'
import styled, {css} from 'styled-components';



export const List = styled.div`
    border: 1px
        ${props => (props.isDraggingOver ? 'dashed #000' : 'none #ddd')};
    /* background: #fff; */
    /* padding: 0.5rem 0.5rem 0; */
    /* border-radius: 3px; */
    flex: 0 0 150px;
    font-family: sans-serif;

`;
export const Container = styled(List)`
    /* &:hover {
      background: #c5d0db;
    } */
    /* margin: 16px; */
    padding-bottom: 36px;
`;