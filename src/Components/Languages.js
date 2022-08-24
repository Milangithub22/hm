import React from "react";
import En from "./Images/en.png";
import Es from "./Images/es.png";

export default function Languages() {
  return (
    <div>
      <button>
        <img src={En} alt="english" style={{ width: 10, heigth: 10 }} />
      </button>

      <button>
        <img src={Es} alt="espanol" style={{ width: 10, heigth: 10 }} />
      </button>
    </div>
  );
}
