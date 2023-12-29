import React from "react";
import "boxicons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
const Head = () => {
  const dispatch = useDispatch();
  const toggleleftMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-md">
      <div className="flex col-span-1 cursor-pointer">
        <div className="h-8 align-middle pr-1" onClick={toggleleftMenu}>
          <box-icon name="menu"></box-icon>
        </div>
        <a href="/">
          <img
            className="h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          ></img>
        </a>
      </div>
      <div className="col-span-10 px-10 text-center">
        <input
          className="w-1/2 h-10 border border-gray-400 p-1 rounded-l-full align-middle"
          type="text"
        />
        <button className="border border-gray-400 p-1 align-middle rounded-r-full w-10">
          <box-icon name="search-alt-2"></box-icon>
        </button>
      </div>
      <div className="col-span-1">
        <box-icon name="user"></box-icon>
      </div>
    </div>
  );
};

export default Head;
