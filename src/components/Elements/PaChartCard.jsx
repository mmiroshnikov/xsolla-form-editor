import React, { useState } from "react";
import { FormGroup, Button, Pill, Dropdown, Icon, ContentBlock, Head } from 'xsolla-uikit';
// import PAh2 from "../PAh2";
// import { CssChartNew } from "../PAcharts";
export const PaChartCard = (props) => {

  const { title = "", extra, children, flatten, cols } = {...props}
  const [act, setAct] = useState(true);
  return (<div style={{
    // ...props
    gridColumn: cols===2 ? '1 / 3' : ''
  }}>

{/* <CssChartNew> */}

    <ContentBlock appearance={flatten ? 'flatten' : 'primary'}>
      <div style={{ width: "100%",
      overflow: "hidden"
      }}>
        <FormGroup indentation="sm">

          <FormGroup style={{ position: 'sticky', top: 0 }} extra={<Button appearance="secondary">+ Add new item</Button>}>
            <div style={{
                position: 'relative', zIndex: 2,
                display: 'flex', alignItems: 'center', }}>

              {!!title && <Head tag="h3" title={title} indentation="xs" />}
              <div style={{ flexGrow: 1, justifyContent: 'flex-end', display: 'flex' }}>

                <div key={`appearance`} style={{ marginBotton: 16 }}>

                  <Dropdown align="right"
                    // autosize={true}
                    size="md"
                    // separated={true}
                    iconAlign='left' options={[
                      {
                        label: <p onClick={() => { setAct(true); }} size="sm" appearance="flatten"><Icon size={18} name="pin-on" />&nbsp;&nbsp;Show on dashboard</p>,
                        // description: 'Build will replace current Master',
                        // customIcon: <StatusDot status="enabled" />,
                        iconAlign: 'left'
                      },
                      {
                        label: <p onClick={() => { setAct(false); }} size="sm" appearance="flatten"><Icon size={18} name="pin-off" />&nbsp;&nbsp;Don't show on dashboard</p>,
                        // description: 'Build will not be available for some devs',
                        // customIcon: <StatusDot status="testing" />,
                        iconAlign: 'left'
                      }
                    ]}>

                    {/* <Pill appearance={`${act ? 'branding' : 'cancelled'}`} separated={true}> */}
                      {/* <Icon name={`${act ? 'pin-on' : 'pin-off'}`} size={18} /> */}
                      <Icon name='more'/>
                    {/* </Pill> */}


                  </Dropdown>
                </div>

              </div>
            </div>
          </FormGroup>


        </FormGroup>
        <FormGroup indentation="lg">
          <div style={{
            position: 'relative', zIndex: 1
            // minHeight: "320px" //TODO: charts height
          }}>
            {children}
          </div>
        </FormGroup>
      </div>
    </ContentBlock>

    {/* </CssChartNew> */}
  </div>);
};
