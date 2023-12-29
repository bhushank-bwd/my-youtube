import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="w-48 p-5 shadow-sm">
      <ul>
        <li>Video</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="text-xl font-bold pt-5">Subscription</h1>
      <ul>
        <li>First</li>
        <li>Second</li>
        <li>Fourth</li>
      </ul>
      <h1 className="text-xl font-bold pt-5">Watch later</h1>
      <ul>
        <li>First</li>
        <li>Second</li>
        <li>Fourth</li>
      </ul>
    </div>
  );
};

export default Sidebar;
