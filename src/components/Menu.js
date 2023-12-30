import React from "react";

export default function Menu({ title, color }) {
  return (
    // <p className={`${color} text-[14px] font-medium`}>{title}</p>
    <p className="text-[#000] text-[14px] font-medium">{title}</p>
  );
}
