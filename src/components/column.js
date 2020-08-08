import React from 'react'
import styled from 'styled-components'
import Task from './Task'
import { Droppable } from 'react-beautiful-dnd'
import {FormGroup, ContentBlock} from 'xsolla-uikit'


const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  /* width: 220px; */

  display: flex;
  flex-direction: column;
`
const Title = styled.h3`
  padding: 8px;
`
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? 'skyblue' : 'white'};
    /* flex-grow: 1; */
    min-height: 100px;
`

export default function Column (props){
    const {column, tasks} = {...props}
    debugger
    return (
      <FormGroup indentation='lg'>
        <ContentBlock >
        {/* <Title>{column.title}</Title> */}
        <Droppable droppableId={column.id} type="TASK">
          {(provided, snapshot) => (
            <TaskList
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
        </ContentBlock>
      </FormGroup>
    )

}
