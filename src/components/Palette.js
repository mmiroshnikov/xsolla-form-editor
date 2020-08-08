import React, {
  Fragment,
  useEffect,
  useState,
  useContext
} from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { ITEMS } from '../data/elements'
import { Draggable } from 'react-beautiful-dnd'
import { Element } from './Element'
import { List } from './Container'

export function Palette(props) {
  const { provided, snapshot } = { ...props }
  return (
    <CssPalette>
      <Kiosk
        provided={provided}
        snapshot={snapshot}
        innerRef={provided.innerRef}
        isDraggingOver={snapshot.isDraggingOver}
      >
        {ITEMS.map((item, index) => (
          <Draggable
            key={item.id}
            draggableId={item.id}
            index={index}
          >
            {(provided, snapshot) => (
              <React.Fragment>
                <Element
                  innerRef={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  isDragging={snapshot.isDragging}
                  style={provided.draggableProps.style}
                >
                  {item.content}
                </Element>
                {snapshot.isDragging && (
                  <Element>{item.content}</Element>
                )}
              </React.Fragment>
            )}
          </Draggable>
        ))}
      </Kiosk>
    </CssPalette>
  )
}

const Kiosk = styled(List)`
  /* position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 200px; */
`

const CssPalette = styled.div`
  /* padding: 80px 0; */
`
