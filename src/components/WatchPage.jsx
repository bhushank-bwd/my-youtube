import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideMenu } from "./utils/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideMenu());
  }, []);
  return <div>WatchPage</div>;
};

export default WatchPage;
