import React, { useContext } from "react";
import Search from "./Search";
import { FaRegUserCircle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiFindReplaceLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { CreateContext } from "../context";

function Navbar() {
    const {isTrue,setTrue} = useContext(CreateContext);
  return (
    <div className="text-white flex justify-between items-center px-3 fixed w-full bg-zinc-900 top-0 ">
      <div className="text-lg md:text-2xl font-semibold flex items-center justify-center gap-1 rounded-xl tracking-tighter ">
        <div className="text-red-600 flex  text-2xl mt-1 md:text-3xl ">
<AiOutlineMenu className="text-white mr-5 text-xl mt-[2px] lg:mt-[4px]" onClick={()=>{
    setTrue(!isTrue);
   
}}/>
          <FaYoutube className="" />
        </div>
        <h1 className=" font-normal tracking-[-2px]">YouTube</h1>
      </div>
      <div className="w-[60%] hidden md:block">
        <Search/>
      </div>
        <div className=" w-full p-2 flex px-6 justify-end md:hidden"><RiFindReplaceLine /></div>
      <div className=" text-blue-400 font-normal text-md py-2 flex justify-end w-32">
        <div className="text-xs flex  justify-center items-center gap-1 border-[1px] p-[5px] rounded-full w-20 md:text-lg md:w-28">
          <div>
            <FaRegUserCircle />
          </div>
          <div>Sign in</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
