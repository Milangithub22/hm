import React from "react";
import En from "./Images/en.png";
import Es from "./Images/es.png";

export default function Languages({ one, two }) {
  return (
    <div>
      <button onClick={one}>
        <img src={En} alt="english" style={{ width: 10, heigth: 10 }} />
      </button>

      <button onClick={two}>
        <img src={Es} alt="espanol" style={{ width: 10, heigth: 10 }} />
      </button>
    </div>
  );
}
