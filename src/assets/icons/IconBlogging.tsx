import React from 'react';

import { SvgIcon } from '@mui/material';

export function IconBlogging({ style, ...props }: any) {
  return (
    <SvgIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <path
        d="M20.1481 3H3.85185C3.36071 3 2.88968 3.18964 2.54239 3.52721C2.19511 3.86477 2 4.32261 2 4.8V7.32H13.1111L15.6296 4.872C16.0002 4.5151 16.4881 4.29628 17.0079 4.25387C17.5278 4.21146 18.0464 4.34816 18.4729 4.64003C18.8995 4.9319 19.2069 5.36034 19.3411 5.85031C19.4754 6.34028 19.4281 6.86054 19.2074 7.32H22V4.8C22 4.32261 21.8049 3.86477 21.4576 3.52721C21.1103 3.18964 20.6393 3 20.1481 3ZM6.07407 5.88C5.92757 5.88 5.78435 5.83777 5.66254 5.75866C5.54073 5.67954 5.44578 5.56709 5.38972 5.43553C5.33365 5.30397 5.31898 5.1592 5.34757 5.01954C5.37615 4.87987 5.4467 4.75158 5.55029 4.65088C5.65389 4.55019 5.78587 4.48162 5.92956 4.45383C6.07325 4.42605 6.22219 4.44031 6.35754 4.49481C6.4929 4.5493 6.60858 4.64159 6.68998 4.75999C6.77137 4.87839 6.81481 5.0176 6.81481 5.16C6.81481 5.35096 6.73677 5.53409 6.59786 5.66912C6.45894 5.80414 6.27053 5.88 6.07407 5.88ZM9.03704 5.88C8.89053 5.88 8.74732 5.83777 8.6255 5.75866C8.50369 5.67954 8.40875 5.56709 8.35268 5.43553C8.29662 5.30397 8.28195 5.1592 8.31053 5.01954C8.33911 4.87987 8.40966 4.75158 8.51325 4.65088C8.61685 4.55019 8.74884 4.48162 8.89253 4.45383C9.03622 4.42605 9.18515 4.44031 9.32051 4.49481C9.45586 4.5493 9.57155 4.64159 9.65294 4.75999C9.73433 4.87839 9.77778 5.0176 9.77778 5.16C9.77778 5.35096 9.69974 5.53409 9.56082 5.66912C9.4219 5.80414 9.23349 5.88 9.03704 5.88ZM18.6667 8.04L14.1481 12.4032C13.94 12.6058 13.6575 12.7197 13.363 12.72H11.7926C11.4979 12.72 11.2153 12.6062 11.0069 12.4037C10.7985 12.2011 10.6815 11.9264 10.6815 11.64V10.1136C10.6817 9.82726 10.799 9.55274 11.0074 9.3504L12.3556 8.04H2V19.2C2 19.6774 2.19511 20.1352 2.54239 20.4728C2.88968 20.8104 3.36071 21 3.85185 21H20.1481C20.6393 21 21.1103 20.8104 21.4576 20.4728C21.8049 20.1352 22 19.6774 22 19.2V8.04H18.6667ZM5.33333 11.64H8.2963C8.39452 11.64 8.48873 11.6779 8.55819 11.7454C8.62765 11.813 8.66667 11.9045 8.66667 12C8.66667 12.0955 8.62765 12.187 8.55819 12.2546C8.48873 12.3221 8.39452 12.36 8.2963 12.36H5.33333C5.23511 12.36 5.1409 12.3221 5.07144 12.2546C5.00198 12.187 4.96296 12.0955 4.96296 12C4.96296 11.9045 5.00198 11.813 5.07144 11.7454C5.1409 11.6779 5.23511 11.64 5.33333 11.64ZM5.33333 14.52H15.7037C15.8019 14.52 15.8961 14.5579 15.9656 14.6254C16.0351 14.693 16.0741 14.7845 16.0741 14.88C16.0741 14.9755 16.0351 15.067 15.9656 15.1346C15.8961 15.2021 15.8019 15.24 15.7037 15.24H5.33333C5.23511 15.24 5.1409 15.2021 5.07144 15.1346C5.00198 15.067 4.96296 14.9755 4.96296 14.88C4.96296 14.7845 5.00198 14.693 5.07144 14.6254C5.1409 14.5579 5.23511 14.52 5.33333 14.52ZM18.6667 18.12H5.33333C5.23511 18.12 5.1409 18.0821 5.07144 18.0146C5.00198 17.947 4.96296 17.8555 4.96296 17.76C4.96296 17.6645 5.00198 17.573 5.07144 17.5054C5.1409 17.4379 5.23511 17.4 5.33333 17.4H18.6667C18.7649 17.4 18.8591 17.4379 18.9286 17.5054C18.998 17.573 19.037 17.6645 19.037 17.76C19.037 17.8555 18.998 17.947 18.9286 18.0146C18.8591 18.0821 18.7649 18.12 18.6667 18.12ZM18.2296 5.3832C18.3674 5.51694 18.4766 5.67575 18.5512 5.85057C18.6258 6.02538 18.6641 6.21276 18.6641 6.402C18.6641 6.59124 18.6258 6.77862 18.5512 6.95343C18.4766 7.12825 18.3674 7.28706 18.2296 7.4208L13.6296 11.892C13.5952 11.9268 13.5537 11.9543 13.5078 11.9729C13.462 11.9915 13.4127 12.0007 13.363 12H11.7926C11.6944 12 11.6002 11.9621 11.5307 11.8946C11.4612 11.827 11.4222 11.7355 11.4222 11.64V10.1136C11.4216 10.0664 11.4312 10.0196 11.4503 9.97617C11.4695 9.93277 11.4977 9.89374 11.5333 9.8616L16.1407 5.3832C16.4183 5.115 16.7938 4.96446 17.1852 4.96446C17.5766 4.96446 17.9521 5.115 18.2296 5.3832Z"
        fill="#858997"
      />
    </SvgIcon>
  );
}