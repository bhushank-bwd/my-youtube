import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  console.log(params.get("v"));
  useEffect(() => {
    dispatch(hideMenu());
  }, []);
  return (
    <div className="p-2">
      <iframe
        width="1000"
        height="700"
        src={`https://www.youtube.com/embed/${params.get("v")}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
