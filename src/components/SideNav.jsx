import React, { useContext, useState } from "react";
import { CreateContext } from "../context";

import "./SideNav.css";
function SideNav() {
  // const [state,setState] = useState(true);
  const { isTrue } = useContext(CreateContext);
  return (
    <div>
      {" "}
      <div className="flex">
        {!isTrue ? (
          <div className="sidenav w-full fixed h-full  duration-500 translate-x-[-100vw]  backdrop-blur-2xl bg-zinc-800">
            <div className=" w-72 h-screen bg-zinc-900 text-white mt-11  fixed ">
              <div className="border-b-[1px] mx-3 px-4 py-5 ">Home</div>
              <div className="border-b-[1px] mx-3 px-4 py-5 ">Your Channel</div>
              <div className="border-b-[1px] mx-3 px-4 py-5 ">Subscription</div>
              <div className="border-b-[1px] mx-3 px-4 py-5 ">History</div>
              <div className="border-b-[1px] mx-3 px-4 py-5 ">Playlist</div>
              <div className="border-b-[1px] mx-3 px-4 py-5 ">Trending</div>
              <div className="border-b-[1px] mx-3 px-4 py-5 ">Gaming</div>
              <div className="border-b-[1px] mx-3 px-4 py-5 ">Movies</div>
            </div>
          </div>
        ) : (
          <div className=" fixed  w-[100vw] backdrop-blur-sm h-full duration-300 translate-x-[0]">
            <div className=" w-72 h-screen bg-zinc-900 text-white mt-11  fixed ">
              <div className="border-b-[1px] mx-3 px-4 py-5 hover:ease-in cursor-pointer">
                Home
              </div>
              <div className="border-b-[1px] mx-3 px-4 py-5 ">Your Channel</div>
              <div className="border-b-[1px] mx-3 px-4 py-5 ">Subscription</div>
              <div className="border-b-[1px] mx-3 px-4 py-5 ">History</div>
              <div className="border-b-[1px] mx-3 px-4 py-5 ">Playlist</div>
              <div className="border-b-[1px] mx-3 px-4 py-5 ">Trending</div>
              <div className="border-b-[1px] mx-3 px-4 py-5 ">Gaming</div>
              <div className="border-b-[1px] mx-3 px-4 py-5 ">Movies</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideNav;
