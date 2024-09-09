import React from 'react';

interface PersonProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const PersonIcon = ({ size = 60, ...props }: PersonProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#clip0_1959_1009)">
      <path
        d="M30 30C38.2875 30 45 23.2875 45 15C45 6.7125 38.2875 0 30 0C21.7125 0 15 6.7125 15 15C15 23.2875 21.7125 30 30 30ZM30 37.5C19.9875 37.5 0 42.525 0 52.5V56.25C0 58.3125 1.6875 60 3.75 60H56.25C58.3125 60 60 58.3125 60 56.25V52.5C60 42.525 40.0125 37.5 30 37.5Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1959_1009">
        <rect width="60" height="60" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default PersonIcon;
