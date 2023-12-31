import React from "react";
import { Link } from "react-router-dom";

const VideoItem = (props) => {
  const { snippet, id, statistics } = props.item;
  const views = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(statistics.viewCount);
  return (
    <Link to={`/watch?v=${id}`}>
      <div className="w-80 h-96 m-5 rounded-md px-2 py-4 shadow-sm">
        <img
          alt="thumbnail"
          src={snippet.thumbnails.medium.url}
          className="w-80 h-48 mb-2 rounded-t-md pb-1"
        ></img>
        <h2>{snippet.title}</h2>
        <h3 className="font-semibold pb-1">{snippet.channelTitle}</h3>
        <h4 className="">Views {views}</h4>
      </div>
    </Link>
  );
};

export default VideoItem;
