import React, { useState } from "react";

export default function Count({ number, style }) {
  let [count, setCount] = useState(0 || number);

  function incrementCount() {
    count = parseInt(count) + 1;
    setCount(count);
  }

  function decrementCount() {
    if (parseInt(count) > 0) count = parseInt(count) - 1;
    setCount(count);
  }

  const handleChange = (event) => {
    setCount(event.target.value);
  };

  return (
    <div
      className="flex justify-between items-center p-[6px] rounded-lg bg-gray-light8 h-full"
      style={style}
    >
      <button className="text-gray hover:text-black2" onClick={decrementCount}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="none"
          viewBox="0 0 28 28"
          className="md:max-w-none max-w-[22px]"
        >
          <circle
            cx="14"
            cy="14"
            r="14"
            fill="#F2F2F2"
            fillOpacity="0.01"
          ></circle>
          <rect
            width="2"
            height="14"
            x="8"
            y="15"
            fill="currentColor"
            rx="1"
            transform="rotate(-90 8 15)"
          ></rect>
        </svg>
      </button>
      <input
        type="text"
        id="count"
        name="count"
        onChange={handleChange}
        value={count}
        className="md:w-12 w-8 text-center text-base font-medium bg-gray-light8 outline-none"
      />
      <button className="text-gray hover:text-black2" onClick={incrementCount}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="none"
          viewBox="0 0 28 28"
          className="md:max-w-none max-w-[22px]"
        >
          <circle
            cx="14"
            cy="14"
            r="14"
            fill="#F2F2F2"
            fillOpacity="0.01"
          ></circle>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M14 7a1 1 0 00-1 1v5H8a1 1 0 100 2h5v5a1 1 0 002 0v-5h5a1 1 0 100-2h-5V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}
