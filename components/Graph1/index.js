import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
  ['Month', 'Shipment', 'Quote', 'Invoice'],
  ['Jan', 23, 40, 30],
  ['Feb', 80, 90, 73],
  ['Mar', 10, 55, 65],
  ['May', 95, 20, 70],
  ['Jun', 50, 40, 10],
  ['Jul', 23, 40, 30],
  ['Aug', 80, 90, 75],
  ['Aug', 20, 50, 70],
];

export const options = {
  legend: {
    position: 'none',
    alignment: 'center',
    textStyle: {
      color: 'red',
      fontName: 'poppins',
      fontSize: 40,
      bold: true,
    },
  },

  colors: ['#214461', '#1890FF', '#307460'],
  axisTitlesPosition: 'in',

  backgroundColor: '#000000',
  backgroundColor: {
    stroke: '#F0F',
    strokeWidth: 4,
    fill: 'white',
  },

  hAxis: {
    gridlines: { count: 0, color: '#F00', interval: 0 },
    textStyle: {
      fontSize: '24px',
      color: '#f0f',
      title: 'specter',
    },
    baselineColor: '#f00',
  },

  vAxis: { gridlines: { color: '#F00', count: 0 } },

  axes: {
    x: {
      0: { side: 'bottom', label: '' }, // Bottom x-axis.
    },
  },
};

export default function Grap1() {
  return (
    <div className="garph1-wrapper">
      <p className="ourfont14">Recent Activities</p>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />

      <div className="row legends justify-content-center">
        <div className="col-auto">
          <span className="legend"></span> Shipments
        </div>
        <div className="col-auto">
          <span
            className="legend"
            style={{ backgroundColor: '#1890FF' }}
          ></span>{' '}
          Shipments
        </div>
        <div className="col-auto">
          <span
            className="legend"
            style={{ backgroundColor: '#307460' }}
          ></span>{' '}
          Shipments
        </div>
      </div>
    </div>
  );
}
