import React from 'react';

interface DownLoadProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const DownloadIcon = ({ size = 20, ...props }: DownLoadProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1537_852)">
      <path
        d="M13.8251 7.5H12.5001V3.33333C12.5001 2.875 12.1251 2.5 11.6667 2.5H8.33342C7.87508 2.5 7.50008 2.875 7.50008 3.33333V7.5H6.17508C5.43341 7.5 5.05841 8.4 5.58341 8.925L9.40841 12.75C9.73342 13.075 10.2584 13.075 10.5834 12.75L14.4084 8.925C14.9334 8.4 14.5667 7.5 13.8251 7.5ZM4.16675 15.8333C4.16675 16.2917 4.54175 16.6667 5.00008 16.6667H15.0001C15.4584 16.6667 15.8334 16.2917 15.8334 15.8333C15.8334 15.375 15.4584 15 15.0001 15H5.00008C4.54175 15 4.16675 15.375 4.16675 15.8333Z"
        fill="#F1F2FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_1537_852">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default DownloadIcon;
