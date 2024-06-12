export const Flag = ({ widht, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width={widht}
      height={height}
      enableBackground="new 0 0 100 100"
      version="1.1"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
    >
      <path d="M79.7 7.7l-1-.4c-8.7-3.3-18.6-3-27 .9-6.4 3-13.7 3.6-20.6 1.9l-9.6-2.4c-.6-.2-1.2 0-1.7.4s-.8 1-.8 1.6V93c0 1.1.9 2 2 2s2-.9 2-2V44.1l7.1 1.8c2.9.7 5.8 1.1 8.7 1.1 5 0 10-1.1 14.6-3.2 7.5-3.5 16.2-3.8 23.9-.8l1 .4c.6.2 1.3.2 1.8-.2s.9-1 .9-1.6v-32c0-.9-.5-1.6-1.3-1.9zm-2.7 31c-8.3-2.7-17.4-2.2-25.3 1.5-6.4 3-13.7 3.6-20.6 1.9L23 40V12.1l7.1 1.8c7.8 2 16 1.2 23.2-2.1 7.4-3.4 16-3.8 23.6-.9v27.8z"></path>
    </svg>
  );
}

export const Clock = ({ widht, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1920"
      width={widht}
      height={height}
    >
      <path
        fillRule="evenodd"
        d="M1377.882 1344L903.53 988.235v-592.94h112.942v536.47l429.176 321.77-67.765 90.465zM960 0C430.645 0 0 430.645 0 960c0 529.242 430.645 960 960 960 529.242 0 960-430.758 960-960 0-529.355-430.758-960-960-960z"
      ></path>
    </svg>
  );
}

export const Calendar = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={width}
      height={height}
    >
      <path
        fill="#454242"
        d="M5.673 0a.7.7 0 01.7.7v1.309h7.517v-1.3a.7.7 0 011.4 0v1.3H18a2 2 0 012 1.999v13.993A2 2 0 0118 20H2a2 2 0 01-2-1.999V4.008a2 2 0 012-1.999h2.973V.699a.7.7 0 01.7-.699zM1.4 7.742v10.259a.6.6 0 00.6.6h16a.6.6 0 00.6-.6V7.756L1.4 7.742zm5.267 6.877v1.666H5v-1.666h1.667zm4.166 0v1.666H9.167v-1.666h1.666zm4.167 0v1.666h-1.667v-1.666H15zm-8.333-3.977v1.666H5v-1.666h1.667zm4.166 0v1.666H9.167v-1.666h1.666zm4.167 0v1.666h-1.667v-1.666H15zM4.973 3.408H2a.6.6 0 00-.6.6v2.335l17.2.014V4.008a.6.6 0 00-.6-.6h-2.71v.929a.7.7 0 01-1.4 0v-.929H6.373v.92a.7.7 0 01-1.4 0v-.92z"
      ></path>
    </svg>
  );
}

export const Principal = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="#000"
      stroke="#000"
      version="1.1"
      viewBox="-20.16 -20.16 241.93 241.93"
      xmlSpace="preserve"
    >
      <g fill="#010002">
        <path d="M0 83.856h78.763V5.086H0v78.77zM70.256 13.6v61.753H8.514V13.6h61.742zM122.833 5.086V195.14h78.778V5.086h-78.778zm8.522 179.228V15.249h61.728v169.065h-61.728zM0 196.525h78.763v-78.771H0v78.771zm70.256-70.263v61.749H8.514v-61.749h61.742z"></path>
      </g>
    </svg>
  );
}

export const Add = ({ width, height, color }) => {
  return(
    <svg
      xmlns = "http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill = "none"
      viewBox = "0 0 24 24"
      >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 12h5m0 0h5m-5 0V7m0 5v5"
      ></path>
    </svg >
  );
}