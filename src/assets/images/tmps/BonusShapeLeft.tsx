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
        strokeWidth="2"
        d="M107.21.36a1.076 1.076 0 0 1 .996.664L118.152 25l-9.946 23.976a1.076 1.076 0 0 1-.995.665H1.436A1.074 1.074 0 0 1 .36 48.564V1.436A1.074 1.074 0 0 1 1.436.36Z"
      />
    </SvgIcon>
  );
}

export default BonusShape;
