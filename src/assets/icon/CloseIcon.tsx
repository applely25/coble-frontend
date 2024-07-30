import React from 'react';

interface CloseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const CloseIcon = ({ size = 18, ...props }: CloseIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 3L15 15M3 15L15 3"
      stroke="#707070"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseIcon;
