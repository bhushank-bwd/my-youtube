import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChatItem } from "./utils/liveChatSlice";

const LiveChat = () => {
  const liveChatArray = useSelector((store) => store.liveChat);
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  function makeid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  useEffect(() => {
    let chatInterval = setInterval(() => {
      dispatch(
        addChatItem({
          name: getRand(randomName.prefix) + " " + getRand(randomName.suffix),
          message:
            makeid(10) +
            " " +
            new Date().getHours() +
            " " +
            new Date().getMinutes() +
            " " +
            new Date().getSeconds(),
        })
      );
    }, 1000);
    return () => {
      clearInterval(chatInterval);
    };
  }, []);
  const randomName = {
    prefix: ["Bhushan", "Sourabh", "Abhishek"],
    suffix: ["Kumbhar", "Patil", "Biranje"],
  };
  function getRand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const sendChat = () => {
    dispatch(
      addChatItem({
        name: "bhushank.bwd",
        message: msg,
      })
    );
    setMsg("");
  };
  return (
    <div className="flex flex-col">
      <div className="h-[600px] overflow-y-scroll flex flex-col-reverse">
        {liveChatArray.map((chat, index) => {
          return (
            <div className="p-1" key={index}>
              <span className="font-bold pr-1">{chat.name}</span>
              <span className="">{chat.message}</span>
            </div>
          );
        })}
      </div>
      <div className="m-1 border-t-2 border-black p-2 justify-between w-full">
        <input
          className="border border-gray-500 w-3/5 p-1"
          type="text"
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
        ></input>
        <button
          className="bg-green-800 w-1/5 ml-1 p-1 text-white"
          onClick={sendChat}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
