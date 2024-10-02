import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";
const Playing = () => {
    const {song, handleSetSong} = useContext(Songs);
    const handleNext = () => {
        handleSetSong(song.id + 1);
    }
    const handlePrevious = () => {
        handleSetSong(song.id - 1);
    }
  return (
    <div className="">
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        showJumpControls={false}
        showSkipControls={true}
        onClickNext={handleNext}
        onClickPrevious={handlePrevious}
      />
    </div>
  );
};

export default Playing;
