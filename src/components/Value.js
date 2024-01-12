import React from "react";

export default function Value({ value, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "#4E4949",
        height: value,
        width: 60,
        cursor: "pointer",
      }}
    />
  );
}
