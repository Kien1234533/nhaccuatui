import React, { useContext } from "react";
import { Songs } from "../Context";

const DetailSong = () => {
  const { song } = useContext(Songs);
  return (
    <div className=" text-start col-span-1 p-3">
      <h2 className="text-blue-400 font-bold">TOP 100 <i class="fa-solid fa-chevron-right ml-3"></i></h2>
      <h2 className="text-slate-600 text-2xl text-center">{song.name}</h2>
      <div className="w-[240px] m-auto mt-10 aspect-square">
        <img className="size-full object-cover rounded-full delay-100 animate-spin-slow" src={song.links.images[0].url} alt="avatar" />
      </div>
      <div className="flex items-center justify-evenly mt-10  p-5">
        <img
          className="w-[70px]"
          src={song.links.images[1].url}
          alt="avatar"
        />
        <span className="text-xl text-slate-600">{song.author}</span>
      </div>
    </div>
  );
};

export default DetailSong;
