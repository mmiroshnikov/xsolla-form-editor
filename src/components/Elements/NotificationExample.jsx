import React, {PureComponent, Fragment} from 'react';
import { FormGroup, Notification } from 'xsolla-uikit';

class NotificationExample extends PureComponent {
  render() {
    return (
      <Fragment>
        <FormGroup>
          <Notification title="Success" status="success" icon={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit et tempore quidem
            maiores? Doloribus, fugit!
          </Notification>
        </FormGroup>

          {/* <Notification title="Warning" status="warning" icon={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit et tempore quidem
            maiores? Doloribus, fugit!
          </Notification> */}

          {/* <Notification title="Error" status="error" icon={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit et tempore quidem
            maiores? Doloribus, fugit!
          </Notification>

          <Notification title="Info" status="info" icon={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit et tempore quidem
            maiores? Doloribus, fugit!
          </Notification>


        <FormGroup label="Float Default appearance" tooltip="Usage as a popup notification">
          <Notification title="Payment method is activated" status="info" icon={true} float={true}>
            Lorem ipsum dolor sit amet.
          </Notification>
        </FormGroup>

        <FormGroup
          label="Simple appearance"
          tooltip="This one always has icon. Should be used without `title` and `float` options.">
          <Notification appearance="simple" status="warning">
            A newer version of the API is available. <a href="#">Learn more</a>
          </Notification>
        </FormGroup>

        <FormGroup label="Minimal appearance">
          <Notification appearance="minimal" status="success">
            A newer version of the API is available. <a href="#">Learn more</a>
          </Notification>
        </FormGroup>

        <FormGroup label="String appearance" tooltip="Usage as a validation message">
          <Notification appearance="string" status="error">
            Please enter correct E-Mail address
          </Notification>
        </FormGroup> */}
      </Fragment>
    );
  }
}

export default NotificationExample;
