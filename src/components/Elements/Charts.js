import React, {
  Component,
  Fragment,
  useContext,
  useState,
  useEffect,
} from "react";



import styled, { css } from "styled-components";

// import "../App2.css";

import { withRouter } from "react-router-dom";

import Highcharts from "highcharts";

import { IntlProvider } from "react-intl";

// import {
//   PAchartUsersMap,
//   PAchartUsersTime,
// } from "./dashboard/PAchartUsersMethods";


import { Switch, Route, Link } from "react-router-dom";

import {
  Button,
  Card,
  Title,
  Input,
  Charts,
  Select,
  RadioGroup,
  Icon,
  Head,
  ButtonAction,
  Table,
  FormGroup,
  ContentBlock,
  StatusDot,
  TreeSelect,
} from "xsolla-uikit";


// import { PaChartCard } from "./uikit2/PaChartCard";
// import { Chart } from "./dashboard/Chart";




import {
  chartSubscribers,
  chart1,
  chartSubsPlans,
  subsGist,
} from '../../data/chartSubscribers';
import { Chart } from './Chart';
import { PaChartCard } from './PaChartCard';


// import { PAconnectorZapier, PAconnectorXsollaDigest } from "./PAconnectors";
// import { PAchartMain, PAchartGists } from './dashboard/PAchartMain';
// import PAtabs from "./PAtabs";
// import { CSSpAtabs0 } from "./PApage";
// import './dashboard/charts.css';




const defaultCharts = [
  {
    id: "payOborot",
    category: ["payments"],
    label: "Оборот",
    // component: <div/>,
    type: "column",
    data: chartSubscribers,
    cols: 2,
    template: "main",
  },
  {
    id: "payCheck",
    category: ["payments"],
    label: "Средний чек",
    // component: <div/>,
    type: "pie",
    data: chartSubscribers,
    cols: 1,
  },
  {
    id: "payConv",
    category: ["payments"],
    label: "Конверсия в успешный платеж из заявки",
    // component: <div/>,
    type: "column",
    data: chartSubsPlans,
    cols: 1,
  },
  {
    id: "payCharg",
    category: ["payments"],
    label: "Chargeback Rate",
    // component: <div/>,
    type: "column",
    data: chartSubscribers,
    cols: 1,
  },
  {
    id: "payAccrate",
    category: ["payments"],
    label: "Acceptance Rate",
    // component: <div/>,
    type: "column",
    data: chartSubsPlans,
    cols: 1,
  },

  {
    id: "metConvps",
    category: ["methods"],
    label: "Средняя конверсия ПС + страна (всех проектов)",
    // component: <div/>,
    type: "column",
    data: chartSubscribers,
    cols: 2,
    template: "main",
  },
  {
    id: "metUniq",
    category: ["methods"],
    label: "Количество уникальных пользователей в ПС + страна",
    // component: <div/>,
    type: "pie",
    data: chartSubsPlans,
    cols: 1,
  },
  {
    id: "metMshare",
    category: ["methods"],
    label: "Маркетшэр",
    // component: <div/>,
    type: "pie",
    data: chartSubscribers,
    cols: 1,
  },
  {
    id: "metComsh",
    category: ["methods"],
    label: "Ставки комиссии",
    // component: <div/>,
    type: "column",
    data: chartSubscribers,
    cols: 1,
  },

  {
    id: "payFunnel",
    template: "main",
    category: ["users"],
    label: "Воронка по шагам на Pay Station",
    // component: <div/>,
    // type: 'funnel',
    data: chartSubscribers,
    cols: 2,
    template: "main",
  },




  {
    id: "subscriptionsGist",
    category: ["subscriptions"],
    label: "Customers",
    // component: <div/>,
    type: 'gist',
    data: subsGist,
    cols: 2,
  },

  {
    id: "subscriptionsProduct",
    // template: 'main',
    category: ["subscriptions"],
    label: "Subscription Plans",
    // component: <div/>,
    // type: 'funnel',
    data: chartSubsPlans,
    cols: 1,
    // template:'main',
  },
  {
    id: "subscriptionsChurn",
    // template: 'main',
    category: ["subscriptions"],
    label: "Churn Rate",
    // component: <div/>,
    // type: 'funnel',
    data: chartSubscribers,
    cols: 1,
    // template:'main',
  },
];

const chartPages = [
  {
    id: "payments",
    label: "Payments analytics",
    // upgrades: <PAconnectorXsollaDigest />,
    charts: [
      ...defaultCharts.filter((one) => one["category"].includes("payments")),
    ],
  },
  {
    id: "subscriptions",
    label: "Subscriptions analytics",
    // upgrades: <PAconnectorXsollaDigest />,
    charts: [
      ...defaultCharts.filter((one) =>
        one["category"].includes("subscriptions")
      ),
    ],
  },
  {
    id: "users",
    label: "Users",
    // upgrades: <PAconnectorZapier />,
    charts: [
      ...defaultCharts.filter((one) => one["category"].includes("users")),
    ],
  },
];

export const PAcharts = function({ flatten, page = "all", title }) {
  let chartsToShow =
    page === "all"
      ? chartPages
      : chartPages.filter((pageData) => pageData["id"] === page);

  return (
    <FormGroup>
      {chartsToShow.map((onePage, ind) => {
        return (
          <FormGroup indentation="lg" key={`page_${onePage["label"]}`}>
            <ContentBlock appearance='flatten'>
              <FormGroup
              // border="xs"
              >

                  <div style={{ flexGrow: 0, paddingBottom: 16 }}>
                    <Head
                      title={title ? title : onePage["label"]}
                      // appearance="separated"
                      indentation='xs'
                    >
                      <div className="l_flex" style={{ width: "100%" }}>
                        <div style={{flexGrow: 1,}}>
                          {/* <CSSpAtabs0
                          style={{
                            flexGrow: 1,
                            width: "auto",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop:0,
                          }}
                          >
                          <PAtabs
                            appearance="secondary"
                            // active={}
                            handleTab={(nw) => {
                              void 0;
                            }}
                            items={[
                              ...onePage["charts"].map((one) => ({
                                name: one["label"],
                                stateName: one["id"],
                              })),
                            ]}
                            // extra='123'
                          />
                          </CSSpAtabs0> */}
                        </div>
                        <div className="l_flex" style={{ flexGrow: 0, width: "280px" }}>
                          {/* Show charts: */}
                          {/* <CssTree style={{ flexGrow: 0, width: "280px" }}>
                            <TreeSelect
                              // kind="tags"
                              name={`tab_${onePage["title"]}_tabs`}
                              size="sm"
                              // disabled={this.disabled}
                              searchable={true}
                              name="basic"
                              allowMultiSelect={true}
                              input={{
                                value: onePage["charts"],
                                onChange: (multiple) => {
                                  setActiveCharts([...multiple]);
                                },
                              }}
                              options={onePage["charts"]}
                              // options={options}
                            />
                          </CssTree> */}
                        </div>

                      </div>
                    </Head>
                  </div>

              </FormGroup>
              <FormGroup indentation="lg">
                <PAchartsSection
                  onePage={onePage}
                  flatten={flatten}
                  {...onePage}
                />
              </FormGroup>
            </ContentBlock>
          </FormGroup>
        );
      })}
    </FormGroup>
  );
};

export const PAchartsSection = function({ flatten, onePage = {} }) {
  const addOrder = (data) => [
    ...data.map((one, ind) => ({ order: ind, ...one })),
  ];

  const [activeCharts, setActiveCharts] = useState(
    addOrder(onePage["charts"])
  );

  return (
    <Fragment>
      <div
        key={`tab_${onePage["title"]}`}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gridColumnGap: "64px",
        }}
      >
        <FormGroup>
          <PAchartsPage
            page={onePage["id"]}
            activeCharts={activeCharts}
            flatten={flatten}
          />
        </FormGroup>

        {/* <div style={{height: '100%', background: '#c5d0db', width: 1}}></div> */}

        <FormGroup
          // style={{background: '#f7faff'}}
          border='md'
        >
          <FormGroup indentation="lg" label="Show">
            <CssTree style={{ flexGrow: 0, width: "280px" }}>
              <TreeSelect
                // kind="tags"
                name={`tab_${onePage["title"]}_tabs`}
                size="sm"
                // disabled={this.disabled}
                searchable={true}
                name="basic"
                allowMultiSelect={true}
                input={{
                  value: onePage["charts"],
                  onChange: (multiple) => {
                    // setActiveCharts([...multiple]);
                  },
                }}
                options={onePage["charts"]}
                // options={options}
              />
            </CssTree>
          </FormGroup>

          <FormGroup  indentation="lg" label="Upgrades">
            {onePage["upgrades"]}
          </FormGroup>

          <FormGroup  indentation="lg" label="Info links">
            <p>
              <Link to="#">Chargeback Rate in Europe</Link>
            </p>
            <p>
              <Link to="#">Best refund policies of 2020</Link>
            </p>
          </FormGroup>
        </FormGroup>
      </div>
    </Fragment>
  );
};

export const CssTree = styled.span`
  & .xsui-tree-select__container {
    width: 280px;
    padding: 8px;
    left: 94%;
  }
`;

export const PAchartsPage = function({
  flatten,
  page = "all",
  activeCharts = [],
}) {
  return (
    <Fragment>
      <IntlProvider locale="en">
      <CssChartsGrid charts={defaultCharts}
        cols="1fr 1fr"
        >
        {activeCharts.map(
          (
            {
              id,
              category = [],
              label,
              type = "column",
              data = {},
              cols = 1,
              order,
              template,
            },
            ind
          ) => {
            return (

              <PaChartCard title={label} cols={template==='main' ? 2 : cols} flatten={flatten}
              style={{ order: order }} key={id}
              >
                  {template === "main" && type !== 'gist' && (
                    // <PAchartMain>
                        <Chart options={data} type={type} />
                    // </PAchartMain>
                  )}
                  {template !== "main" && type !== 'gist' && <Chart options={data} type={type} />}

                  {/* {type === 'gist' && <PAchartGists options={data} />} */}
                </PaChartCard>

            );
          }
        )}
      </CssChartsGrid>
      </IntlProvider>
    </Fragment>
  );
};

// const PAcharts = function() {
//   return (
//     <FormGroup>
//       <ContentBlock indentation="lg">
//       <FormGroup indentation="lg">
//         <PAchart>
//           <PAchart1 />
//         </PAchart>
//       </FormGroup>

//       <FormGroup indentation="lg">
//         <PAchart>
//           <PAchart2 />
//         </PAchart>
//       </FormGroup>

//       <FormGroup indentation="lg">
//         <PAchart>
//           <PAchartMap />
//         </PAchart>
//       </FormGroup>
//       </ContentBlock>
//     </FormGroup>
//   );
// };

export function PAchart({ children, flatten }) {
  return (
    // <CardNew indentation="lg">
    <ContentBlock
      indentation="lg"
      appearance={flatten ? "flatten" : "secondary"}
    >
      {children}
    </ContentBlock>
  );
}
{
  /* </CardNew>)} */
}

export default PAcharts;

export function PAchart1() {
  return (
    <FormGroup label="Combined">
      <Charts
        options={{
          chart: {
            height: 280,
            type: "column",
          },
          xAxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          },
          yAxis: [
            {
              label: {
                text: "Gross revenue, USD",
              },
              labels: {
                format: "${value}",
                formatter: function() {
                  const value = 123;
                  return value % 100 === 0 ? `$${value / 1000}k` : `$${value}`;
                },
              },
            },
            {
              label: {
                text: "Payments",
              },
              opposite: true,
            },
          ],
          series: [
            {
              name: "Gross revenue",
              tooltip: {
                valuePrefix: "$",
              },
              type: "column",
              data: [1471, 7914, 6973, 3048, 5869, 4859, 5437],
            },
            {
              name: "Payments",
              yAxis: 1,
              data: [1233, 1444, 1421, 500, 1355, 1245, 1355],
            },
          ],
        }}
      />
    </FormGroup>
  );
}

export function PAchart2fake() {
  return (
    // <CardNew  indentation="lg">
    <FormGroup indentation="lg">
      <div className="login-country-chart">
        <img
          width="100%"
          src="https://res.cloudinary.com/maiik/image/upload/v1564130858/Xsolla_PA/Screenshot_2019-07-26_at_01.45.37.png"
        />
      </div>
    </FormGroup>

    // </CardNew>
  );
}

// export function PAchartMap() {
//   return (
//     // <CardNew indentation="lg">
//     //   <FormGroup>
//     //     <div className="xsui-head__title">Sales by countries</div>
//     //   </FormGroup>
//     <PAchartUsersMap />
//     //   <FormGroup>

//     //   </FormGroup>
//     // </CardNew>
//   );
// }

export const CssChartNew = styled.div`
  padding: 24px;
  border-radius: 4px;
  border: 1px solid #c5d0db;
`










export const CssChartsGrid = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); */
  grid-template-columns: repeat(1fr);
  /* grid-template-rows: repeat(auto-fit, minmax(360px, auto)); */
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  ${({cols}) => !!cols && css`
    grid-template-columns: ${cols}
  `}
  ${({charts}) => charts && Math.abs(charts.length % 2) === 1  && css` //TODO: последний чарт во всю строку
    & *:nth-child(${charts.length}) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 2;
    }
  `}

`;

