import "./AlertMessage.css";
import React from "react";

function AlertMessage({ message }) {
  return (
    <div className="alert">
      <svg
        className="alert__close-button"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="7.16016"
          y="9.28249"
          width="3"
          height="22"
          transform="rotate(-45 7.16016 9.28249)"
          fill="#721c24"
        />
        <rect
          x="22.7168"
          y="7.16117"
          width="3"
          height="22"
          transform="rotate(45 22.7168 7.16117)"
          fill="#721c24"
        />
      </svg>
      <p>{message}</p>
    </div>
  );
}

export default AlertMessage;
