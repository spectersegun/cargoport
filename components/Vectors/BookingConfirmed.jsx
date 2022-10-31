import React from 'react';

export default function BookingConfirmed(props) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="20"
        cy="20"
        r="19.5"
        fill="white"
        stroke={props.color || '#307460'}
        stroke-dasharray="2 2"
      />
      <circle cx="20" cy="20" r="12" fill={props.color || '#307460'} />
      <path
        d="M16.25 20.375L19.25 23.375L23.75 16.625"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
