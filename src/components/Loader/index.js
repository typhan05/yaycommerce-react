import React from "react";

import "./loader.css";

export default function Loader({ color = "black2", icon = "icon-sm" }) {
  const size = icon === "icon-sm" ? "w-5 h-5" : "w-8 h-8";
  return <span className={`loader border-${color} ${size}`}></span>;
}
