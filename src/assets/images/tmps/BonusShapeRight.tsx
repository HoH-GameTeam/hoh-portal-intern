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
        d="M116.564.36a1.074 1.074 0 0 1 1.077 1.076v47.128a1.074 1.074 0 0 1-1.077 1.077H1.619a1.074 1.074 0 0 1-1.077-1.077L10.327 25 .626 1.853a1.074 1.074 0 0 1 .577-1.41Z"
      />
    </SvgIcon>
  );
}

export default BonusShape;
