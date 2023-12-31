import React, { useEffect, useState } from "react";
import VideoItem from "./VideoItem";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const API_KEY = `AIzaSyAanAsZrt--g4a5WFitvDPLuuyLj8a8m4o`;
  const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${API_KEY}&maxResults=50`;

  useEffect(() => {
    allVideoList();
    // eslint-disable-next-line
  }, []);
  const allVideoList = async () => {
    let res = await fetch(URL);
    res = await res.json(res);
    // console.log(res.items);
    setVideoList(res.items);
  };
  if (!videoList.length > 0) return null;
  return (
    <div className="flex flex-wrap">
      {videoList.length && <HigerOrderAddComponent item={videoList[0]} />}
      {videoList.map((item, index) => {
        return <VideoItem item={item} key={item.id} />;
      })}
    </div>
  );
};

const HigerOrderAddComponent = ({ item }) => {
  return (
    <div className="border border-red-400">
      <VideoItem key={`add_one`} item={item} />
    </div>
  );
};
export default VideoContainer;
