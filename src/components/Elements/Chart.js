import React from 'react'
// import { CSSchartfix } from '../PAdashboard';
import { Charts } from 'xsolla-uikit';



export function Chart({options, type = 'column'}) {
  return (
  // <CSSchartfix>
    <Charts
      options={{
        chart: {
          height: 280,
          type: type
        },
        ...options
      }}
    />
  // </CSSchartfix>
  )
}



