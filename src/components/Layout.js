import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import console = require('console');
import { Line } from './Line';
import { Element } from './Element';
import { ITEMS, Uikit } from '../data/elements';
import { Button, FormGroup, ContentBlock } from 'xsolla-uikit';
import { List, Container } from './Container';
import { AddSection } from './AddSection';
import { Notice } from './Notice';
import { Palette } from './Palette';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};
/**
 * Moves an item from one list to another list.
 */
const copy = (source, destination, droppableSource, droppableDestination) => {
    console.log('==> dest', destination);

    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];

    destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() });
    return destClone;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const Content = styled.div`
    /* margin: 80px 300px 80px 80px; */
`;



const Clone = styled(Line)`
    + div {
        display: none !important;
    }
`;




export const Handle = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    user-select: none;
    margin: -0.5rem 0.5rem -0.5rem -0.5rem;
    padding: 0.5rem;
    line-height: 1.5;
    border-radius: 3px 0 0 3px;
    background: #fff;
    border-right: 1px solid #ddd;
    color: #000;
`;







// const Button = styled.button`
//     display: flex;
//     align-items: center;
//     align-content: center;
//     justify-content: center;
//     margin: 0.5rem;
//     padding: 0.5rem;
//     color: #000;
//     border: 1px solid #ddd;
//     background: #fff;
//     border-radius: 3px;
//     font-size: 1rem;
//     cursor: pointer;
// `;

const ButtonText = styled.div`
    margin: 0 1rem;
`;



export class Layout extends Component {
    state = {
        [uuid()]: []
    };
    onDragEnd = result => {
        const { source, destination } = result;

        console.log('==> result', result);

        // dropped outside the list
        if (!destination) {
            return;
        }

        switch (source.droppableId) {
            case destination.droppableId:
                this.setState({
                    [destination.droppableId]: reorder(
                        this.state[source.droppableId],
                        source.index,
                        destination.index
                    )
                });
                break;
            case 'ITEMS':
                this.setState({
                    [destination.droppableId]: copy(
                        ITEMS,
                        this.state[destination.droppableId],
                        source,
                        destination
                    )
                });
                break;
            default:
                this.setState(
                    move(
                        this.state[source.droppableId],
                        this.state[destination.droppableId],
                        source,
                        destination
                    )
                );
                break;
        }
    };

    addList = e => {
        this.setState({ [uuid()]: [] });
    };




    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
          <DragDropContext onDragEnd={this.onDragEnd}>
            <CssBody>


            <Droppable droppableId="ITEMS" isDropDisabled={true}>
                    {(provided, snapshot) => (
                        <Palette
                          provided={provided}
                          snapshot={snapshot}
                          innerRef={provided.innerRef}
                          isDraggingOver={snapshot.isDraggingOver}>
                        </Palette>
                    )}
                </Droppable>

                <Content>
            <ContentBlock>

                <AddSection handle={this.addList}/>




                    {Object.keys(this.state).map((list, i) => {
                        console.log('==> list', list);
                        return (
                            <Droppable key={list} droppableId={list}>
                                {(provided, snapshot) => (
                                    <Container
                                        innerRef={provided.innerRef}
                                        isDraggingOver={
                                            snapshot.isDraggingOver
                                        }>

                                          <FormGroup>
                                        {this.state[list].length
                                            ? this.state[list].map(
                                                  (item, index) => (
                                                      <Draggable
                                                          key={item.id}
                                                          draggableId={item.id}
                                                          index={index}>
                                                          {(
                                                              provided,
                                                              snapshot
                                                          ) => (
                                                              <Line
                                                                  handle={provided.dragHandleProps}
                                                                  innerRef={
                                                                      provided.innerRef
                                                                  }
                                                                  {...provided.draggableProps}
                                                                  isDragging={
                                                                      snapshot.isDragging
                                                                  }
                                                                  style={
                                                                      provided
                                                                          .draggableProps
                                                                          .style
                                                                  }>

                                                                  <Uikit component={item.componentId}/>
                                                              </Line>
                                                          )}
                                                      </Draggable>
                                                  )
                                              )
                                            : !provided.placeholder && (
                                                  <Notice />

                                              )}
                                        {provided.placeholder}
                                        </FormGroup>
                                    </Container>

                                )}
                            </Droppable>
                        );
                    })}
                </ContentBlock>
                </Content>








          </CssBody>
            </DragDropContext>
        );
    }
}



const CssBody = styled.div`
padding: 80px;
background: #f7faff;
display: grid;
grid-template-columns:  1fr 4fr;
grid-column-gap: 64px;
grid-row-gap: 64px;
`
