import React, {PureComponent, Fragment, useState} from 'react';
// import FormGroup from '../form-group';
import { Input, FormGroup } from 'xsolla-uikit';

// import InputPassword from '../input-password';
// import Icon from '../icon';



export function InputExample({state = 'sm'}) {

  const [val, setVal] = useState()

  const setValue = (e: SyntheticInputEvent<HTMLInputElement>) => setVal(e.target.value);


    return (
      <Fragment>
      <div style={{maxWidth: 400, margin: '0'}}>
        <FormGroup
          label="Standard input"
          caption="Default appearance and behavior. Used in most cases.">
          <Input
            size={state}
            input={{name: 'default', value: val,
            onChange: setValue}} />
        </FormGroup>
      </div>

      </Fragment>
      // <div style={{maxWidth: 480, margin: '0 auto'}}>
      //   <FormGroup
      //     label="Standard input"
      //     indentation="lg"
      //     caption="Default appearance and behavior. Used in most cases.">
      //     <Input input={{name: 'default', value: this.state.value, onChange: this.setValue}} />
      //   </FormGroup>

    //     <FormGroup label="With error" indentation="lg">
    //       <Input
    //         input={{name: 'default', value: this.state.value, onChange: this.setValue}}
    //         meta={{touched: true, error: 'Error message'}}
    //       />
    //     </FormGroup>

    //     <FormGroup label="With 'highlight' validationAppearance" indentation="lg">
    //       <Input
    //         input={{name: 'default', value: this.state.value, onChange: this.setValue}}
    //         meta={{touched: true, error: 'Error message'}}
    //         validationAppearance="highlight"
    //       />
    //     </FormGroup>

    //     <FormGroup
    //       label="Small input"
    //       indentation="lg"
    //       caption="Usually used for filters. Width is fixed at 164px.">
    //       <Input
    //         input={{name: 'small', value: this.state.value, onChange: this.setValue}}
    //         size="sm"
    //         inline={true}
    //       />
    //     </FormGroup>

    //     <FormGroup label="With icon" indentation="lg">
    //       <Input
    //         input={{name: 'with-icon', value: this.state.value, onChange: this.setValue}}
    //         offset="left"
    //         icon="search"
    //       />
    //     </FormGroup>

    //     <FormGroup label="With custom icon" indentation="lg">
    //       <Input
    //         input={{name: 'with-custom-icon', value: this.state.value, onChange: this.setValue}}
    //         offset="left"
    //         customIcon={require('./../_icons/youtube.svg')}
    //       />
    //     </FormGroup>

    //     <FormGroup label="Borderless" indentation="lg">
    //       <Input
    //         appearance="flatten"
    //         input={{name: 'with-icon', value: this.state.value, onChange: this.setValue}}
    //         offset="left"
    //         icon="search"
    //       />
    //     </FormGroup>

    //     <FormGroup label="With custom trigger" indentation="lg">
    //       <Input
    //         input={{name: 'with-icon', value: this.state.value, onChange: this.setValue}}
    //         offset="right"
    //         extra={<Icon name="circle-remove-mini" hoverable={true} onClick={this.setValue} />}
    //       />
    //     </FormGroup>

    //     <FormGroup label="Password field" indentation="lg" caption="Shows/hides input value">
    //       <InputPassword
    //         input={{name: 'password', value: this.state.value, onChange: this.setValue}}
    //         type="password"
    //       />
    //     </FormGroup>

    //     <FormGroup
    //       label="Readonly (button appearance)"
    //       indentation="lg"
    //       caption="Used for 'select' fields. Not applicable for keyboard input.">
    //       <Input
    //         input={{name: 'readonly', value: this.state.value, onChange: this.setValue}}
    //         offset="right"
    //         readOnly={true}
    //         icon="dropdown-select"
    //       />
    //     </FormGroup>

    //     <FormGroup
    //       label="Custom сomponent"
    //       indentation="lg"
    //       // eslint-disable-next-line max-len
    //       caption="Allows to use any custom component instead of default <input>, e.g. 'react-debounce-input'">
    //       <Input
    //         as={() => <textarea />}
    //         input={{name: 'readonly', value: this.state.value, onChange: this.setValue}}
    //       />
    //     </FormGroup>
    //   </div>
    )

}

export default InputExample;
