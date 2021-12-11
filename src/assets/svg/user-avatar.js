import * as React from "react";

const Avatar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={55}
    fill="none"
    {...props}
  >
    <path
      d="M27.045 11.832a9.508 9.508 0 1 0 0 19.016 9.508 9.508 0 0 0 0-19.016Z"
      fill="#535456"
    />
    <path
      d="M27.045.423a26.622 26.622 0 1 0 26.622 26.622A26.653 26.653 0 0 0 27.045.423Zm15.198 43.596a9.512 9.512 0 0 0-9.493-9.368H21.34a9.512 9.512 0 0 0-9.493 9.368 22.82 22.82 0 1 1 30.398 0h-.002Z"
      fill="#535456"
    />
  </svg>
);

export default Avatar;
