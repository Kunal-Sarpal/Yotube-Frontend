import React, { useContext, useState } from "react";
import { CreateContext } from "../context";

import "./SideNav.css";
function SideNav() {
  // const [state,setState] = useState(true);
  const {isTrue} = useContext(CreateContext) ;
  return (
    <div>
      
      {" "}
      <div>
        {!isTrue ? (<div className=" sidenav w-[100vw]   h-screen  fixed duration-300 translate-x-[-100vw]">
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

        
        
      ):(<div className=" sidenav w-[100vw]  fixed  h-screen duration-300">
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
    </div>)}
       
      </div>
    </div>
  );
}

export default SideNav;
