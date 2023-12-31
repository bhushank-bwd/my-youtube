import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comment from "./Comment";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  console.log(params.get("v"));
  useEffect(() => {
    dispatch(hideMenu());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="flex flex-col">
      <div className="p-2 flex">
        <iframe
          width="1200"
          height="700"
          src={`https://www.youtube.com/embed/${params.get("v")}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="p-2 h-[700px] w-[600px] mx-2 bg-slate-200">
          <LiveChat />
        </div>
      </div>
      <Comment />
    </div>
  );
};

export default WatchPage;
