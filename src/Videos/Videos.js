import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";
const Videos = () => {
  const videoInfo = [
    {
      url: "https://www.youtube.com/watch?v=ncq5S1Sewl0&t=539s",
      image: "/images/flag.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=OtrEusX809c",
      image: "/images/flag.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=dGq0gi0wv64",
      image: "/images/flag.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=azq0S0DKS50",
      image: "/images/flag.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=8zKuNo4ay8E",
      image: "/images/flag.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=75XmHauQNdA",
      image: "/images/flag.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=7BOi0H59tXY",
      image: "/images/flag.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=azq0S0DKS50",
      image: "/images/flag.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=RS_HDj2mOkk",
      image: "/images/flag.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=-5tNYkN2p7c",
      image: "/images/flag.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=N6zqatiur3A",
      image: "/images/flag.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=ncq5S1Sewl0&t=539s",
      image: "/images/flag.jpg",
    },
  ];
  return (
    <div className="main">
      <div className="videos">
        {videoInfo.map((item, index) => {
          return (
            <VideosDisplay url={item.url} key={index} image={item.image} />
          );
        })}
      </div>
    </div>
  );
};

function VideosDisplay(props) {
  return (
    <div className="video">
      <ReactPlayer url={props.url} height={180} width={280} controls />
      <div className="text">
        <img
          src={props.image}
          style={{ width: 45, height: 45, borderRadius: "50%" }}
        />
        <div>Youtube clone part-1</div>
      </div>
      <div className="view">108 views 25 Sept 2020</div>
    </div>
  );
}

export default Videos;
