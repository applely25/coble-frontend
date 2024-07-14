import React from 'react';

const path = {
  right: 'M9.49951 6.5L14.4995 11.5L9.49951 16.5',
  left: 'M14.5005 6.5L9.50049 11.5L14.5005 16.5',
  up: 'M17.5 14.5005L12.5 9.50049L7.5 14.5005',
  down: 'M17.5 9.49951L12.5 14.4995L7.5 9.49951',
};

interface CloseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  direction?: 'down' | 'right' | 'left' | 'up';
}

const CloseIcon = ({
  size = 24,
  direction = 'right',
  ...props
}: CloseIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d={path[direction]}
      stroke="#8D8D8D"
      stroke-width="1.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default CloseIcon;
