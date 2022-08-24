import React from "react";
import En from "./Images/en.png";
import Es from "./Images/es.png";

export default function Languages() {
  return (
    <div>
      <button>
        npm i react-scripts
        <img alt="english" style={{ width: 10, heigth: 10 }} />
      </button>
      src={En}
      <button>
        <img alt="espanol" style={{ width: 10, heigth: 10 }} />
        src={Es}
      </button>
    </div>
  );
}
