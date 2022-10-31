import React from 'react';

export default function LocationLine(props) {
  return (
    <svg
      width="1"
      height="35"
      viewBox="0 0 1 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.25"
        y1="1.0928e-08"
        x2="0.249998"
        y2="35"
        stroke="#EEEEEE"
        stroke-width="0.5"
        stroke-dasharray="1 1"
      />
    </svg>
  );
}
