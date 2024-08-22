import React from 'react';

interface SearchIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const SearchIcon = ({ size = 24, ...props }: SearchIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_951_533)">
      <path
        d="M14.6651 12.8962H13.7383L13.4098 12.5797C14.8176 10.9384 15.545 8.69932 15.1461 6.31951C14.5947 3.06048 11.873 0.457936 8.58819 0.0593492C3.62577 -0.550255 -0.550646 3.62319 0.0593914 8.58208C0.458262 11.8646 3.06265 14.5843 6.32401 15.1353C8.7055 15.5339 10.9462 14.8071 12.5886 13.4003L12.9054 13.7285V14.6547L17.8913 19.637C18.3723 20.1177 19.1583 20.1177 19.6393 19.637C20.1202 19.1564 20.1202 18.3709 19.6393 17.8903L14.6651 12.8962ZM7.62621 12.8962C4.70506 12.8962 2.34703 10.5398 2.34703 7.62078C2.34703 4.70172 4.70506 2.34536 7.62621 2.34536C10.5473 2.34536 12.9054 4.70172 12.9054 7.62078C12.9054 10.5398 10.5473 12.8962 7.62621 12.8962Z"
        fill="#A9A9A9"
      />
    </g>
    <defs>
      <clipPath id="clip0_951_533">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default SearchIcon;
