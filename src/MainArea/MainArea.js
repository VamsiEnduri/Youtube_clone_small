import React from "react";
import "./MainArea.css";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineWatchLater,
} from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";

import { AiOutlineScissor, AiOutlineHome } from "react-icons/ai";
import Videos from "../Videos/Videos";

const MainArea = () => {
  const info = [
    { icon: <AiOutlineHome size={30} />, text: "Home" },
    { icon: <MdOutlineExplore size={30} />, text: "Explore" },
    { icon: <MdOutlineSubscriptions size={30} />, text: "Subscriptions" },
    { icon: <MdOutlineVideoLibrary size={30} />, text: "Library" },
    { icon: <MdOutlineHistory size={30} />, text: "History" },
    { icon: <RiVideoLine size={30} />, text: "Your Videos" },
    { icon: <MdOutlineWatchLater size={30} />, text: "Watch Later" },
    { icon: <AiOutlineScissor size={30} />, text: "Your Clips" },
    { icon: <BiLike size={30} />, text: "Liked Videos" },
  ];
  return (
    <div className="MainArea">
      <div className="sidebar">
        {info.map((item, index) => {
          return <Display key={index} icon={item.icon} text={item.text} />;
        })}
      </div>
      <Videos />
    </div>
  );
};

function Display(props) {
  return (
    <div className="Icon">
      <span>{props.icon}</span>
      <h3 style={{ fontSize: 15 }}>{props.text}</h3>
    </div>
  );
}

export default MainArea;
