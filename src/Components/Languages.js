import React from "react";

export default function Languages({ one, two }) {
  return (
    <div>
      <button onClick={one}>EN</button>

      <button onClick={two}>ES</button>
    </div>
  );
}
