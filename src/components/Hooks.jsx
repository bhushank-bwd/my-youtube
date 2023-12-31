import React from "react";
import UseMemo from "./UseMemo";
import UseRef from "./UseRef";

const Hooks = () => {
  return (
    <div className="flex gap-2">
      <UseMemo />
      <UseRef />
    </div>
  );
};

export default Hooks;
