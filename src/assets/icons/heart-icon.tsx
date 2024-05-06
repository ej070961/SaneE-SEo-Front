import React from 'react';

type IconProps = {
  width?: number;
  height?: number;
};

const HeartIcon = ({ width, height }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9585 13.4792L12.5835 11.125L13.771 9.95833L14.9585 11.125L17.896 8.1875L19.0835 9.35417L14.9585 13.4792ZM9.16683 17.5L6.521 15.125C5.521 14.2222 4.66336 13.4167 3.94808 12.7083C3.2328 12 2.64252 11.3333 2.17725 10.7083C1.71197 10.0833 1.37169 9.47917 1.15641 8.89583C0.941135 8.3125 0.833496 7.70139 0.833496 7.0625C0.833496 5.75694 1.271 4.67014 2.146 3.80208C3.021 2.93403 4.11127 2.5 5.41683 2.5C6.13905 2.5 6.82655 2.65278 7.47933 2.95833C8.13211 3.26389 8.69461 3.69444 9.16683 4.25C9.63905 3.69444 10.2016 3.26389 10.8543 2.95833C11.5071 2.65278 12.1946 2.5 12.9168 2.5C14.0418 2.5 14.9863 2.81597 15.7502 3.44792C16.5141 4.07986 17.0349 4.875 17.3127 5.83333H15.5418C15.2918 5.27778 14.9238 4.86111 14.4377 4.58333C13.9516 4.30556 13.4446 4.16667 12.9168 4.16667C12.2085 4.16667 11.5974 4.35764 11.0835 4.73958C10.5696 5.12153 10.0904 5.625 9.646 6.25H8.68766C8.25711 5.625 7.76752 5.12153 7.21891 4.73958C6.6703 4.35764 6.06961 4.16667 5.41683 4.16667C4.62516 4.16667 3.94114 4.44097 3.36475 4.98958C2.78836 5.53819 2.50016 6.22917 2.50016 7.0625C2.50016 7.52083 2.59739 7.98611 2.79183 8.45833C2.98627 8.93056 3.3335 9.47569 3.8335 10.0938C4.3335 10.7118 5.01405 11.434 5.87516 12.2604C6.73627 13.0868 7.8335 14.0833 9.16683 15.25C9.52794 14.9306 9.95155 14.5625 10.4377 14.1458C10.9238 13.7292 11.3127 13.3819 11.6043 13.1042L11.7918 13.2917L12.1981 13.6979L12.6043 14.1042L12.7918 14.2917C12.4863 14.5694 12.0974 14.9132 11.6252 15.3229C11.1529 15.7326 10.7363 16.0972 10.3752 16.4167L9.16683 17.5Z"
      fill="#949494"
    />
  </svg>
);

export default HeartIcon;
