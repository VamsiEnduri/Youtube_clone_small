import React from "react";
import "./Header.css";
import { FaYoutube } from "react-icons/fa";
import { MdSearch, MdVideoCall, MdViewComfy } from "react-icons/md";
import { AiTwotoneBell } from "react-icons/ai";
// import MainArea from "../MainArea/MainArea";
const Header = () => {
  return (
    <>
      <div>
        <div className="HeaderArea">
          <div className="Header">
            <header className="header">
              <button className="button" style={{ margin: 10 }}>
                &#9776;
              </button>
              <FaYoutube color="red" size={30} />
              <h1>YouTube</h1>
            </header>
            <div className="Search">
              <input type="search" placeholder="Search..." />
              {/* <div className="search"> */}
              <MdSearch size={25} style={{ marginRight: 20 }} />
              {/* </div> */}
            </div>
            <div className="Icons">
              <div className="icon">
                <MdVideoCall size={30} />
              </div>
              <div className="icon">
                <MdViewComfy size={30} />
              </div>
              <div className="icon">
                <AiTwotoneBell size={30} />
              </div>
              <div className="icon">
                <img src="/images/ntr.jpg" alt="ntr pic" />
              </div>
            </div>
          </div>
        </div>
        {/* <MainArea /> */}
        <hr />
      </div>
    </>
  );
};

export default Header;
