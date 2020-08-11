import React, {PureComponent, Fragment, useState, useEffect} from 'react';
import { StepTabs, FormGroup } from 'xsolla-uikit';


const stepsDefault: any = [
  {label: 'General info'},
  {label: 'Conditions'},
  {label: 'Schedule'},
  {label: 'Preview'},
  {label: 'Some more info', disabled:  true},
  {label: 'Finish', disabled: true}
]




export function ExampleStepTabs({state = {current: 1, total: 4}}) {

  const limitTabs = (limit) => {
    return stepsDefault.map((step, index) => {
      if (index < limit) {
        debugger
        return ({
          ...step,
          // onClick: setCurrent(index + 1)
          onClick: ()=> void(0)
        })
      } else {
        return null
      }
    }).filter(Boolean)
  }

  const [current, setCurrent] = useState(state['current'])
  const [total, setTotal] = useState(state['total'])
  const [steps, setSteps] = useState(limitTabs(state['total']))




  useEffect(() => {
    debugger
    if (current !== state['current']) setCurrent(parseInt(state['current']))
    if (total !== state['total']) {
      setCurrent(parseInt(state['total']))
      setSteps(limitTabs(state['total']))

    }
    console.log('state = ', state);
  }, [state])






  return (
    <Fragment>
      <FormGroup style={{maxWidth: 600}}>
        <StepTabs
          current={current}
          // steps={() => {
          //   debugger
          //   steps.length = parseInt(state['total'])
          //   return steps
          // }}
          steps={steps}
          />
      </FormGroup>
    </Fragment>
  );

}


