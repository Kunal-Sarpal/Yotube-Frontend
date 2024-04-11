/* eslint-disable react/prop-types */
function VideoCard(props) {
  return (
    <div className="p-2">
      <img
        className=" rounded-xl hover:rounded-none"
        src={props.thumbnail}
        alt="Thumbnail"
      />

      <div className="grid grid-cols-12 mt-2">
        <div className=" col-span-2">
          <div className="flex justify-center ">
            <img
              className="rounded-full w-12 h-12 object-cover border-[1px]"
              src={props.image}
              alt="Thumbnail"
            />
          </div>
        </div>
        <div className=" col-span-10  text-white pl-2 ">
          <div>
            <div>{props.title}</div>

            <div className="col-span-11  text-zinc-400 text-sm font-semibold">
              {props.author}
            </div>
            <div className="col-span-11  text-zinc-400 text-sm ">
              {props.views} views{" "}
              <span className="font-bold p-[2px] h-full ">.</span>{" "}
              {props.timestamp}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
