import React, { useRef, useState } from "react";

function UseRef() {
  let x = 0;
  const [y, setY] = useState(0);
  const z = useRef(0);
  return (
    <div className="w-80 h-80 bg-slate-200 flex flex-col">
      <div className="m-1 p-1">
        <button
          className="p-2 border-1 border-black rounded-md bg-green-200"
          onClick={() => {
            x = x + 1;
            console.log("x clicked", x, y, z.current);
          }}
        >
          Increse X
        </button>
        <span className="p-1">{x}</span>
      </div>
      <div className="m-1 p-1">
        <button
          className="p-2 border-1 border-black rounded-md bg-green-200"
          onClick={() => {
            setY(y + 1);
            console.log("y clicked", x, y, z.current);
          }}
        >
          Increse Y
        </button>
        <span className="p-1">{y}</span>
      </div>
      <div className="m-1 p-1">
        <button
          className="p-2 border-1 border-black rounded-md bg-green-200"
          onClick={() => {
            z.current++;
            console.log("z clicked", x, y, z.current);
          }}
        >
          Increse Z
        </button>
        <span className="p-1">{z.current}</span>
      </div>
    </div>
  );
}

export default UseRef;
