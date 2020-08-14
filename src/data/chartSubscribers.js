import React from "react";

import { subsPlans } from './subsPlans';


export const chartSubscribers = {
  tooltip: {
    header: "Today",
  },
  xAxis: {
    categories: ["April", "May", "June", "July", "August"],
  },
  yAxis: {
    title: {
      text: "Unique users",
    },
  },
  series: [
    {
      name: `<a href='#' style='color: blue'>'Users, stopped subscription'</a>`,
      data: [0, 30, 70, 10, 40],
      colorIndex: 4,
    },
    {
      name: "New subscribers",
      data: [300, 200, 400, 450, 100],
      colorIndex: 0,
    },
  ],
};

export const chartSubsPlans = {
  tooltip: {
    header: "Today",
    total: 21,
  },
  legend: {
    enabled: false,
  },
  xAxis: {
    categories: subsPlans.map((el, i) =>
      i < 4
        ? `<a style='opacity: 1;  padding: 4px 6px; border-radius: 3; display: inline-block; background: #ccc !important;' href='/subscriptions/plans/${
            el["id"]
          }'>${el["label"]}</a>`
        : null
    ),
  },
  yAxis: {
    title: {
      text: "",
    },
    stackLabels: {
      format: "{total} users",
    },
  },
  series: [
    {
      name: "",
      data: [1024, 750, 100, 600],
    },
  ],
};

export const chart1 = {
  tooltip: {
    header: "Today",
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
        format: '${value}',
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
};

export const subsGist = [
  {
    label: "Total subsctibers",
    digit: "13,923",
    percent: "+13.93",
    subline: "compared to the previous 30 days",
  },
  {
    label: "Subsctiber Churn Rate",
    digit: "3%",
    percent: 1.93,
    invert: true,
    subline: "compared to the previous 30 days",
  },
  {
    label: "Subscriber LTV",
    digit: "1,018",
    percent: 3,
    subline: "compared to the previous 30 days",
  },
];
