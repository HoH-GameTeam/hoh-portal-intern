import React from 'react';

import { SvgIcon } from '@mui/material';

export function BonusShape({ isActive, ...props }: any) {
  return (
    <SvgIcon
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 119 50"
      width="100%"
      height="auto"
    >
      <path
        fill="#25272C"
        fillRule="evenodd"
        stroke={isActive ? '#FFCA00' : '#2B2D2F'}
        strokeWidth="1"
        d="M107.812.718 117.997 25l-9.518 23.83-106.129.452a.716.716 0 0 1-.718-.718L10.988 25 1.683 1.703a.716.716 0 0 1 .4-.934l105.73-.05Z"
      />
    </SvgIcon>
  );
}

export default BonusShape;
