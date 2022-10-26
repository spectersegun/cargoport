import React from 'react';

export default function Timer(props) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="20" cy="20" r="20" fill="#1890FF" />
      <path
        d="M25.39 23.67L21.35 20H18.64L14.6 23.67C13.47 24.69 13.1 26.26 13.65 27.68C14.2 29.09 15.54 30 17.05 30H22.94C24.46 30 25.79 29.09 26.34 27.68C26.89 26.26 26.52 24.69 25.39 23.67ZM21.82 26.14H18.18C17.8 26.14 17.5 25.83 17.5 25.46C17.5 25.09 17.81 24.78 18.18 24.78H21.82C22.2 24.78 22.5 25.09 22.5 25.46C22.5 25.83 22.19 26.14 21.82 26.14Z"
        fill="white"
      />
      <path
        d="M26.3502 12.32C25.8002 10.91 24.4602 10 22.9502 10H17.0502C15.5402 10 14.2002 10.91 13.6502 12.32C13.1102 13.74 13.4802 15.31 14.6102 16.33L18.6502 20H21.3602L25.4002 16.33C26.5202 15.31 26.8902 13.74 26.3502 12.32ZM21.8202 15.23H18.1802C17.8002 15.23 17.5002 14.92 17.5002 14.55C17.5002 14.18 17.8102 13.87 18.1802 13.87H21.8202C22.2002 13.87 22.5002 14.18 22.5002 14.55C22.5002 14.92 22.1902 15.23 21.8202 15.23Z"
        fill="white"
      />
    </svg>
  );
}