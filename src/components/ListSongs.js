import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

const ListSongs = () => {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [id, setId] = useState(0);
  const handlePlaySong = (id) => {
    setId(id);
    handleSetSong(id);
  };
  useEffect(() => {
    setId(song.id);
  }, [song]);
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-slate-600 h-12">
          <tr>
            <th className="w-[10%]"></th>
            <th className="text-left">Song</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody className="">
          {DataSongs.map((song, index) => {
            return (
              <tr
                key={index}
                className={`bg-cyan-900 h-12 text-gray-400 hover:bg-slate-600 ${
                  id === song.id && "text-teal-300 bg-slate-600 font-bold"
                }`}
                onClick={() => handlePlaySong(song.id)}
              >
                <td>{index + 1}</td>
                <td className="text-left">{song.name}</td>
                <td>{song.author}</td>
                <td className="">
                  <a href={song.url}>
                    <i className="fa fa-download"></i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListSongs;
