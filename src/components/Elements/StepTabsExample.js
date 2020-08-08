import React, {PureComponent, Fragment} from 'react';
import { StepTabs, FormGroup } from 'xsolla-uikit';


type State = {
  current: number
};

export class ExampleStepTabs extends PureComponent<null, State> {
  state = {
    current: 3
  };

  setCurrent = (current: number) => this.setState({current});

  steps: any = [
    {label: 'General info'},
    {label: 'Conditions', disabled: true},
    {label: 'Schedule', disabled: true},
    {label: 'Preview', disabled: true},
    // {label: 'Some more info', disabled: true},
    // {label: 'Finish', disabled: true}
  ].map((step, index) => ({
    ...step,
    onClick: this.setCurrent.bind(this, index + 1)
  }));

  render() {
    return (
      <Fragment>
        <FormGroup style={{maxWidth: 600}}>
          <StepTabs current={this.state.current} steps={this.steps} />
        </FormGroup>
      </Fragment>
    );
  }
}


