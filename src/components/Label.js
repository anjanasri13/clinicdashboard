import React from "react";

export default function Label({ title }) {
  return (
    <div>
      <label className="text-[#000] text-[22px] font-medium ml-[250px]">
        {title}
      </label>
    </div>
  );
}
