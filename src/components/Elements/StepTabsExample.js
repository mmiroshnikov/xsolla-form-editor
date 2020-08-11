import React, {PureComponent, Fragment, useState, useEffect} from 'react';
import { StepTabs, FormGroup } from 'xsolla-uikit';



export function ExampleStepTabs({state = 1}) {


  const [current, setCurrent] = useState(state)


  useEffect(() => {
    debugger
    if (current !== state) setCurrent(parseInt(state))
    console.log('state = ', state);
  }, [state])

  const steps: any = [
    {label: 'General info'},
    {label: 'Conditions'},
    {label: 'Schedule'},
    {label: 'Preview'},
    // {label: 'Some more info', disabled: true},
    // {label: 'Finish', disabled: true}
  ]

  // steps.lenth = parseInt(state);

  steps.map((step, index) => ({
    ...step,
    // onClick: setCurrent(index + 1)
    onClick: ()=> void(0)
  }));


  return (
    <Fragment>
      <FormGroup style={{maxWidth: 600}}>
        <StepTabs
          current={current}
          steps={steps} />
      </FormGroup>
    </Fragment>
  );

}


