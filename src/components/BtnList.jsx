import React from "react";

const BtnList = () => {
  const btnTitleArray = ["All", "Mixed", "Live", "News", "Sports"];
  return (
    <div className="m-4">
      {btnTitleArray.map((title, index) => {
        return <Button title={title} key={index} />;
      })}
    </div>
  );
};
const Button = ({ title }) => {
  return (
    <button className="bg-gray-300 text-black p-2 rounded-md mr-8 w-16">
      {title}
    </button>
  );
};
export default BtnList;
