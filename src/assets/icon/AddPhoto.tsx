import React from 'react';

interface AddPhotoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const AddPhotoIcon = ({ size = 96, ...props }: AddPhotoIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1884_1004)">
      <path
        d="M84.08 20H76V11.92C76 9.76 74.24 8 72.08 8H71.96C69.76 8 68 9.76 68 11.92V20H59.96C57.8 20 56.04 21.76 56 23.92V24.04C56 26.24 57.76 28 59.96 28H68V36.04C68 38.2 69.76 40 71.96 39.96H72.08C74.24 39.96 76 38.2 76 36.04V28H84.08C86.24 28 88 26.24 88 24.08V23.92C88 21.76 86.24 20 84.08 20ZM64 36.04V32H59.96C57.84 32 55.84 31.16 54.32 29.68C52.84 28.16 52 26.16 52 23.92C52 22.48 52.4 21.16 53.08 20H20C15.6 20 12 23.6 12 28V76C12 80.4 15.6 84 20 84H68C72.4 84 76 80.4 76 76V42.88C74.8 43.56 73.44 44 71.92 44C67.56 43.96 64 40.4 64 36.04ZM63.84 76H24C22.36 76 21.4 74.12 22.4 72.8L30.32 62.28C31.16 61.16 32.8 61.24 33.6 62.36L40 72L50.44 58.08C51.24 57.04 52.8 57 53.6 58.04L65.4 72.76C66.44 74.08 65.52 76 63.84 76Z"
        fill="#A9A9A9"
      />
    </g>
    <defs>
      <clipPath id="clip0_1884_1004">
        <rect width="96" height="96" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default AddPhotoIcon;
