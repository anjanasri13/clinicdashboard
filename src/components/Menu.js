import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ title, color, to }) {
  return (
    // <p className={`${color} text-[14px] font-medium`}>{title}</p>
    <Link to={to} className="text-[#000] text-[14px] font-medium">
      {title}
    </Link>
  );
}
