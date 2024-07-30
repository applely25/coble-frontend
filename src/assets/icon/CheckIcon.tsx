import React from 'react';

interface CheckIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const CheckIcon = ({ size = 27, ...props }: CheckIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.84357 16.5242L22.388 3.75719C22.8928 3.25234 23.5352 3 24.3154 3C25.0955 3 25.738 3.25234 26.2428 3.75719C26.7476 4.26205 27 4.90437 27 5.6846C27 6.46482 26.7476 7.10715 26.2428 7.61201L11.771 22.3065C11.2203 22.8572 10.5778 23.1325 9.84357 23.1325C9.10932 23.1325 8.46684 22.8572 7.91616 22.3065L0.757197 15.1475C0.252398 14.6426 0 14.0003 0 13.2201C0 12.4399 0.252398 11.7975 0.757197 11.2927C1.26199 10.7878 1.90447 10.5355 2.68461 10.5355C3.46475 10.5355 4.10722 10.7878 4.61202 11.2927L9.84357 16.5242Z"
      fill="white"
    />
  </svg>
);

export default CheckIcon;
